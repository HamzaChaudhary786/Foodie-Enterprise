import { DropdownMenu, Separator } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const UsernameMenu = () => {

    const { user, logout } = useAuth0()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className=' flex items-center px-3 font-bold hover:text-orange-500'>
                <CircleUserRound className='text-orange-500' />

                {user?.email}
            </DropdownMenuTrigger>

            <DropdownMenuContent>

                <DropdownMenuItem>
                    <Link to='/user-profile' className='font-bold hover:text-orange-500'>Profile</Link>

                </DropdownMenuItem>

                <Separator />

                <DropdownMenuItem>
                    <Button className='flex flex-1 bg-orange-500 font-bold'
                        onClick={() => logout()}>
                        Logout
                    </Button>
                </DropdownMenuItem>





            </DropdownMenuContent>
        </DropdownMenu >
    )
}

export default UsernameMenu