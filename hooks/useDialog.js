  // Modules:
  import { useState } from 'react'

  export const useDialog = () => {
    const [dialogMessage, setDialogMessage] = useState(null)
    const handleDialog = (message) => {
      setDialogMessage(message)
      setTimeout(() => {setDialogMessage(null)}, 2500);
    }
    return [dialogMessage, handleDialog]
  }
  export default { useDialog }