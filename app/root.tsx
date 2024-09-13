import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Footer } from '~/components/footer/footer';
import '~/styles/index.scss';
import { SiteWrapper } from '~/components/site-wrapper/site-wrapper';

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <SiteWrapper>
                    <Outlet />
                </SiteWrapper>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
