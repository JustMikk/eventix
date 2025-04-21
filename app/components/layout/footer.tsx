import React from 'react'
import { Button } from '../ui/button'
import { HelpCircle, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="p-4 border-t mt-auto">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <p>Copyright © 2025 Peterdraw</p>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Term and conditions</span>
              <span>Contact</span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </footer>
  )
}

export default Footer