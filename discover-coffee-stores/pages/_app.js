import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div><Component {...pageProps} />
     <footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
  </div>
}
