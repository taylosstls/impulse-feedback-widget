import { Popover, PopoverPanel } from '@headlessui/react'

import { OpenWidget } from '../../molecules/OpenWidget'
import { WidgetContent } from '../WidgetContent'

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-8 flex flex-col items-end">
      <PopoverPanel>
        <WidgetContent />
      </PopoverPanel>

      <OpenWidget text="Feedback" />
    </Popover>
  )
}
