import { useNavigate as useRouterNavigate, useLocation } from 'react-router-dom'
import { useCallback } from 'react'

interface UseNavigateReture {
    navigate: (path: string) => void
    goBack: () => void
    goHome: () => void
    currentPath: string
}

const useNavigate = (): UseNavigateReture => {
    const navigate = useRouterNavigate()
    const location = useLocation()

    const goBack = useCallback(() => {
        navigate(-1)
    }, [navigate])

    const goHome = useCallback(() => {
        navigate('/')
    }, [navigate])
    
    const navigateTo = useCallback((path: string) => {
        navigate(path)
    }, [navigate])

    return {
        navigate: navigateTo,
        goBack,
        goHome,
        currentPath: location.pathname
    }
}

export default useNavigate