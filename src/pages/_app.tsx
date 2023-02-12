import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

interface NextAppProps extends AppProps {
	session: any;
}

export default function App({ Component, pageProps, session }: NextAppProps) {
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
