import { Button } from './ui/button'

const SearchBar = ({ placeHolder }: { placeHolder: string }) => {
    return (
        <>

            <form action="
        ">
                <div className='bg-white py-1 px-3 flex justify-between rounded-3xl border-2 '>

                    <input type="text" placeholder={placeHolder} className='outline-none focus:outline-none flex-1' />
                    <Button type="submit" className='bg-orange-500 rounded-3xl'>
                        Search
                    </Button>
                </div>
            </form>
        </>
    )
}

export default SearchBar