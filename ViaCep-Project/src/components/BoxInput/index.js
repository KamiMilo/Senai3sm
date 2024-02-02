//definir props
//editable = se o input está em modo de edição 
import { FieldContent } from "./style"
import { Label } from "../Label"
import { Input } from "../Input"



export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue= null,
    onChangeText = null,
    KeyType = 'default',
    maxLength
}) =>{
    return(
      <FieldContent fieldWidth={fieldWidth}>
        <Label textLabel={textLabel}/>

            <Input
            placeholder = {placeholder}
            editable= {editable}
            KeyType= {KeyType}
            maxLength={maxLength}
            fieldValue= {fieldValue}
            onChangeText={onChangeText}     
            />      
        
      </FieldContent>
       
    
    )
}