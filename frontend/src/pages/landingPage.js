import React from 'react';
import './styles/landingPage.css';

import GradientBackground from '../assets/gradient-background';
import { useAuth0 } from '@auth0/auth0-react';

export default function LandingPage() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="landing-page">
            <section className="landing-page-section">
                <GradientBackground
                    handleclick={() => loginWithRedirect()}
                    className="landing-page-gradient-background" />
            </section>
        </div>
    )
}