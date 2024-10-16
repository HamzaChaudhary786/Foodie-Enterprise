import { cuisineList } from "@/commonComponents/RestaurantOptions"
import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useFormContext } from "react-hook-form"
import CuisinesCheckbox from "./CuisinesCheckbox"

const CuisinesSection = () => {

    const { control } = useFormContext();

    return (
        <div className="parent space-y-2">
            <div>
                <h1 className="text-2xl font-bold">
                    Cuisines
                </h1>
                <FormDescription>
                    Select the cuisines you're interested in
                </FormDescription>

            </div>

            <FormField control={control} name="cuisines" render={({ field }) => (
                <FormItem >

                    <div className="grid md:grid-cols-5 justify-items-start items-start gap-1">

                        {
                            cuisineList.map((cuisineItem) => (
                                <CuisinesCheckbox cuisine={cuisineItem} field={field} />
                            ))
                        }
                    </div>
                    <FormMessage />

                </FormItem>
            )}>

            </FormField>
        </div>
    )
}

export default CuisinesSection
