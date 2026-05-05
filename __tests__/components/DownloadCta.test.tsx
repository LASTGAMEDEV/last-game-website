import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DownloadCta from '@/components/sections/DownloadCta'

global.fetch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

it('renders the email input and submit button', () => {
  render(<DownloadCta />)
  expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /notify me/i })).toBeInTheDocument()
})

it('shows success message after successful submission', async () => {
  ;(global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true }),
  })

  render(<DownloadCta />)
  await userEvent.type(screen.getByPlaceholderText('your@email.com'), 'user@example.com')
  await userEvent.click(screen.getByRole('button', { name: /notify me/i }))

  await waitFor(() => {
    expect(screen.getByText(/you're in/i)).toBeInTheDocument()
  })
})

it('shows error message after failed submission', async () => {
  ;(global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: false,
    json: async () => ({ error: 'Failed' }),
  })

  render(<DownloadCta />)
  await userEvent.type(screen.getByPlaceholderText('your@email.com'), 'user@example.com')
  await userEvent.click(screen.getByRole('button', { name: /notify me/i }))

  await waitFor(() => {
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })
})

it('POSTs to /api/subscribe with the entered email', async () => {
  ;(global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ success: true }),
  })

  render(<DownloadCta />)
  await userEvent.type(screen.getByPlaceholderText('your@email.com'), 'user@example.com')
  await userEvent.click(screen.getByRole('button', { name: /notify me/i }))

  expect(global.fetch).toHaveBeenCalledWith('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'user@example.com' }),
  })
})
