import { AspectRatio } from "@/components/ui/aspect-ratio"
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"

const ImageSection = () => {
    const { control, watch } = useFormContext()

    const existingUrl = watch("imageUrl")
    return (
        <>
            <div className="space-y-3">
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold ">
                        Image
                    </h1>

                    <FormDescription>
                        Add an image that will be displayed on your restaurant listing in the
                        search results. Adding a new image will overwrite the existing one.
                    </FormDescription>

                </div>

                <div className="flex flex-col md:w-[50%] gap-8">

                    {
                        existingUrl && (
                            <AspectRatio ratio={16 / 9}>

                                <img src={existingUrl} className="rounded-md h-full w-full object-cover" alt="" />

                            </AspectRatio>
                        )
                    }

                    <FormField control={control} name="imageFile" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    className="bg-white "
                                    type="file"
                                    accept=".jpg, .jpeg, .png "
                                    onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )} />

                </div>
            </div>
        </>
    )
}

export default ImageSection