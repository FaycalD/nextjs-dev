import '../styles/globals.css'
import { Provider as AuthProvider } from '../lib/auth'
import { Provider as ChatProvider } from '../components/ChatProvider'
import { Provider as MessageProvider } from '../components/MessageProvider'
import { Provider as UserProvider } from '../components/UserProvider'
import { Provider as TenantProvider } from '../components/TenantSelector'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <UserProvider>
        <TenantProvider>
          <ChatProvider>
            <MessageProvider>
              <Component {...pageProps} />
            </MessageProvider>
          </ChatProvider>
        </TenantProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default MyApp