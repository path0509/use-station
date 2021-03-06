import { Component, ReactNode } from 'react'

interface Props {
  handleError?: (error: Error, errorInfo: object) => void
  fallback?: ReactNode
}

class ErrorBoundary extends Component<Props> {
  state = { hasError: null }
  static getDerivedStateFromError = () => ({ hasError: true })

  componentDidCatch(error: Error, errorInfo: object) {
    this.props.handleError?.(error, errorInfo)
  }

  render() {
    const { fallback = null, children } = this.props
    const { hasError } = this.state
    return hasError ? fallback : children
  }
}

export default ErrorBoundary
