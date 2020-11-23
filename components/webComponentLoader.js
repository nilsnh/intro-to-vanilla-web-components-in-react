import { useEffect, useState } from 'react'

/**
 * Responsible for dynamically loading one
 * or more web components before rendering
 * children.
 */
export default function WebComponentLoader({
  load: dependencies = [],
  children,
}) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    // Skip loading any deps that's already available.
    const wcToLoad = dependencies.filter((name) => !customElements.get(name))

    // Start waiting for WC to be present.
    Promise.all(
      wcToLoad.map((name) => customElements.whenDefined(name))
    ).then(() => setLoaded(true))

    // Add script tags to load the dependencies.
    wcToLoad.forEach((name) => {
      const scriptTag = document.createElement('script')
      scriptTag.src = `/${name}.js`
      document.body.appendChild(scriptTag)
    })
  }, [])
  return loaded ? children : <>Loading</>
}
