import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormItem, FormLabel } from "@/components/ui/form"
import { ControllerRenderProps, FieldValues } from "react-hook-form"

type Props = {
    cuisine: string,
    field: ControllerRenderProps<FieldValues, "cuisines">
}
const CuisinesCheckbox = ({ cuisine, field }: Props) => {
    
    return (
        <FormItem className="flex flex-row mt-2 space-x-1 items-center space-y-0">

            <FormControl>
                <Checkbox
                    className="bg-white"
                    checked={field.value.includes(cuisine)}
                    onCheckedChange={(checked) => {
                        if (checked) {
                            field.onChange([...field.value, cuisine])
                        } else {
                            field.onChange(field.value.filter((value: string) => value !== cuisine))
                        }

                    }}
                />

            </FormControl>
            <FormLabel className="text-sm font-normal">
                {cuisine}
            </FormLabel>



        </FormItem>
    )
}

export default CuisinesCheckbox