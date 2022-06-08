import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = render(<App />);
  })

  it('user profile should display nickname when the submit button is clicked', () => {
    const text = app.getByLabelText('Nickname:');
    const submit = app.getByRole('button')
    userEvent.type(text, 'Jimmy');
    userEvent.click(submit);
    const nickname = app.getByText('Nickname: Jimmy');
    expect(nickname).toBeInTheDocument();
  })
})