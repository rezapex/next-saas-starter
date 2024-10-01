'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ProposalFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
}

export default function ProposalForm({ onSubmit }: ProposalFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <form action={onSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <Input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
        <Textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="mt-1"
          rows={10}
        />
      </div>
      <Button type="submit">Create Proposal</Button>
    </form>
  );
}