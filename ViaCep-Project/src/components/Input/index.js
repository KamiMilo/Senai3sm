import { InputText } from "./style";

export function Input({
placeholder,
editable,
fieldValue,
onChangeText,
keyType,
maxLegth

}) {
return(
    
    <InputText
    placeholder={placeholder}
    editable={editable}
    keyboardType={keyType}
    maxLegth={maxLegth}
    value={fieldValue}
    onChangeText={onChangeText}
    />
)
}