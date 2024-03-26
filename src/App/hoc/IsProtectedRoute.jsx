export const IsProtectedRoute = ({children}) => {
    const user = JSON.parse(localStorage('user') ?? '{}');
    if (user.email && user.token){
        return children;
    }
    window.location.href = '/login'
    return null
}