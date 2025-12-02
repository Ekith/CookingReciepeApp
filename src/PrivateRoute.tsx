// PrivateRoute.tsx
import React, { FC, ReactNode } from 'react'; // Importez ReactNode pour les enfants
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';

// Définition des types pour les props du composant
interface PrivateRouteProps {
    children: ReactNode; // Les enfants sont de type ReactNode
    redirectTo?: string; // Optionnel : permettre de changer la page de redirection
}

// Déclaration du composant comme un Function Component (FC)
const PrivateRoute: FC<PrivateRouteProps> = ({ children, redirectTo = '/login' }) => {
    const { user, loading } = useAuth();

    if (loading) {
        // Écran de chargement pendant que nous vérifions la session Supabase
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                Chargement de l'authentification...
            </div>
        );
    }

    if (!user) {
        // Si l'utilisateur n'est pas connecté, rediriger
        return <Navigate to={redirectTo} replace />;
    }

    // L'utilisateur est connecté, affichez le contenu
    return <>{children}</>;
};

export default PrivateRoute;