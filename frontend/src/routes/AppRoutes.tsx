import ProtectedRoute from '@/auth/ProtectedRoutes'
import Layout from '@/layouts/layout'
import AuthCallbackPage from '@/pages/AuthCallbackPage'
import HomePage from '@/pages/HomePage'
import ManageRestaurantPage from '@/pages/ManageRestaurantPage'
import UserProfilePage from '@/pages/UserProfilePage'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout showHero={true}><HomePage /></Layout>} />

                <Route path='/auth-callback' element={<AuthCallbackPage />} />

                <Route element={<ProtectedRoute />}>
                    <Route path='/user-profile' element={<Layout showHero={false}><UserProfilePage /></Layout>} />
                    <Route path='/manage-retaurant' element={<Layout showHero={false}><ManageRestaurantPage /></Layout>} />

                </Route>
                <Route path='*' element={<Navigate to='/' />} />

            </Routes>

        </>
    )
}

export default AppRoutes