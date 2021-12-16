  // Modules:
  import { useState } from 'react'

  export const useDialog = () => {
      const [dialogMessage, setDialogMessage] = useState(null)
      const handleDialog = (message) => {
          setDialogMessage(message)

          function saludos(){
            console.log("Hola Mundo");
          }
          
          setTimeout(saludos, 3000);
      }
      return [dialogMessage, handleDialog]
  }
  export default { useDialog }