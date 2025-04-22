"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function TestToast() {
  const { toast } = useToast()

  return (
    <div className="flex flex-col gap-4 p-4">
      <Button
        onClick={() => {
          toast({
            title: "Success!",
            description: "Your action was completed successfully.",
          })
        }}
      >
        Show Success Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Error!",
            description: "Something went wrong. Please try again.",
          })
        }}
      >
        Show Error Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "With Action",
            description: "This toast has an action button.",
            action: (
              <Button variant="outline" size="sm">
                Undo
              </Button>
            ),
          })
        }}
      >
        Show Toast with Action
      </Button>
    </div>
  )
} 