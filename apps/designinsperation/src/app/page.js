'use client';
import { useState } from 'react';
import { ReloadIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';
import Button from '@/components/atoms/button';

export default function Home() {
  // Example state to control the loading state of a button
  const [isLoading, setIsLoading] = useState(false);

  // Example icon (you can replace this with your icon component or element)
  const MyIcon = () => <span>🌟</span>;

  return (
    <>
      <div className="mx-auto space-y-4 max-w-7xl">
        <div className="grid grid-cols-4 gap-6">
          <Button
            variant="brand"
            style="outline"
            onClick={() => console.log('Icon button clicked')}
          >
            Button
          </Button>

          <Button variant="secondary" onClick={() => console.log('Icon button clicked')}>
            Button
          </Button>

          <Button variant="success" onClick={() => console.log('Icon button clicked')}>
            Button
          </Button>

          <Button variant="brand" onClick={() => console.log('Icon button clicked')}>
            Button
          </Button>

          <Button variant="info" onClick={() => console.log('Icon button clicked')}>
            Button
          </Button>

          <Button variant="destructive" onClick={() => console.log('Icon button clicked')}>
            Button
          </Button>

          <Button style="icon">
            <MyIcon />
          </Button>

          <Button>
            <EnvelopeOpenIcon className="w-4 h-4 mr-2" /> Login with Email
          </Button>

          <Button
            variant="destructive"
            disabled={true}
            onClick={() => console.log('Icon button clicked')}
          >
            Button
          </Button>

          <Button variant="outline">Button</Button>

          {/* Loading Button */}
          <Button
            onClick={() => {
              setIsLoading(true);
              // Simulate an async action
              setTimeout(() => setIsLoading(false), 2000);
            }}
            loading={{
              isLoading: isLoading,
              icon: <ReloadIcon className="w-4 h-4 mr-2" />, // Your custom loading icon
              text: 'Processing...' // Custom loading text
            }}
            variant="brand" // Example variant
            size="medium" // Example size
          >
            Button
          </Button>
        </div>
      </div>
    </>
  );
}
