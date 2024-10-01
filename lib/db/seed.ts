import { stripe } from '../payments/stripe';
import { db } from './drizzle';
import { users, teams, teamMembers } from './schema';
import { hashPassword } from '@/lib/auth/session';
import { eq } from 'drizzle-orm';

async function createStripeProducts() {
  console.log('Creating Stripe products and prices...');

  const baseProduct = await stripe.products.create({
    name: 'Base',
    description: 'Base subscription plan',
  });

  await stripe.prices.create({
    product: baseProduct.id,
    unit_amount: 800, // $8 in cents
    currency: 'usd',
    recurring: {
      interval: 'month',
      trial_period_days: 7,
    },
  });

  const plusProduct = await stripe.products.create({
    name: 'Plus',
    description: 'Plus subscription plan',
  });

  await stripe.prices.create({
    product: plusProduct.id,
    unit_amount: 1200, // $12 in cents
    currency: 'usd',
    recurring: {
      interval: 'month',
      trial_period_days: 7,
    },
  });

  console.log('Stripe products and prices created successfully.');
}

async function seed() {
  const email = 'test@test.com';
  const password = 'admin123';
  const passwordHash = await hashPassword(password);

  // Check if the user already exists
  const existingUser = await db.select().from(users).where(eq(users.email, email)).limit(1);

  let user;
  if (existingUser.length > 0) {
    console.log('User already exists. Updating password...');
    [user] = await db
      .update(users)
      .set({
        passwordHash: passwordHash,
        firstName: 'Test',
        lastName: 'User',
        role: "owner",
      })
      .where(eq(users.email, email))
      .returning();
  } else {
    console.log('Creating new user...');
    [user] = await db
      .insert(users)
      .values({
        firstName: 'Test',
        lastName: 'User',
        email: email,
        passwordHash: passwordHash,
        role: "owner",
      })
      .returning();
  }

  console.log('User created or updated.');

  // Check if the team already exists
  const existingTeam = await db.select().from(teams).where(eq(teams.name, 'Test Team')).limit(1);

  let team;
  if (existingTeam.length > 0) {
    console.log('Team already exists.');
    team = existingTeam[0];
  } else {
    console.log('Creating new team...');
    [team] = await db
      .insert(teams)
      .values({
        name: 'Test Team',
      })
      .returning();
  }

  // Check if the user is already a member of the team
  const existingMember = await db
    .select()
    .from(teamMembers)
    .where(eq(teamMembers.userId, user.id))
    .where(eq(teamMembers.teamId, team.id))
    .limit(1);

  if (existingMember.length === 0) {
    console.log('Adding user to team...');
    await db.insert(teamMembers).values({
      teamId: team.id,
      userId: user.id,
      role: 'owner',
    });
  } else {
    console.log('User is already a member of the team.');
  }

  await createStripeProducts();
}

seed()
  .catch((error) => {
    console.error('Seed process failed:', error);
    process.exit(1);
  })
  .finally(() => {
    console.log('Seed process finished. Exiting...');
    process.exit(0);
  });
