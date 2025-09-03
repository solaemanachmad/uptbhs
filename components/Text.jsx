'use client'
import React from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const Text = () => {

    const handleClick = (mode) => {
        mode ? toast.success("Success", { description: "This is a success toast" }) : toast.error("Error", { description: "This is an error toast" });
    }

    return (
        <div>
            <Button className="bg-red-600" variant="default"
                onClick={() => handleClick(false)}>Hello</Button>
        </div>
    );
};

export default Text;