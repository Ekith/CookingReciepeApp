// useAuth.ts
import { useState, useEffect } from 'react';
import { supabase } from './App'; // Assurez-vous que ce chemin est correct
import { User } from '@supabase/supabase-js'; // Importation du type User

// Interface pour le résultat de notre hook
interface AuthState {
    user: User | null;
    loading: boolean;
}

export const useAuth = (): AuthState => {
    // Déclarons l'état avec le type User de Supabase, qui peut être null
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Fonction asynchrone pour l'initialisation de la session
        const getInitialSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            setUser(session?.user ?? null);
            setLoading(false);
        };

        getInitialSession();

        // Écouter les changements futurs
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                // Le type 'session' est géré par l'écouteur
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );

        // Nettoyer l'abonnement
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return { user, loading };
};