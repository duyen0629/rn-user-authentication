# User Authentication

A React Native app built with Expo that demonstrates email/password user authentication using the [Firebase Authentication REST API](https://firebase.google.com/docs/reference/rest/auth).

## Features

- **Login and signup screens** with shared auth UI and client-side validation
- **Form validation** for email format, password length (> 6 characters), and matching confirm fields on signup
- **Firebase integration** via the Identity Toolkit REST API (`accounts:signUp`)
- **Stack navigation** with separate auth and authenticated flows (Welcome screen after login)

## Tech Stack

- [Expo](https://expo.dev/) ~54
- [React Native](https://reactnative.dev/) 0.81
- [React Navigation](https://reactnavigation.org/) (native stack)
- [Axios](https://axios-http.com/) for HTTP requests

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm or yarn
- [Expo Go](https://expo.dev/go) on a physical device, or iOS Simulator / Android Emulator

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Firebase

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Email/Password** sign-in under Authentication → Sign-in method.
3. Copy your project's **Web API Key** from Project settings → General.

### 3. Set environment variables

Copy the example env file and add your Firebase API key:

```bash
cp .env.example .env
```

Edit `.env`:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
```

> `.env` is gitignored. Never commit API keys to version control.

### 4. Start the app

```bash
npm start
```

Then press `i` for iOS, `a` for Android, or `w` for web—or scan the QR code with Expo Go.

Other scripts:

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run ios`  | Start on iOS simulator   |
| `npm run android` | Start on Android emulator |
| `npm run web`  | Start in the browser     |

## Project Structure

```
user-authentication/
├── App.js                 # Root navigation (auth + authenticated stacks)
├── screens/
│   ├── LoginScreen.js     # Login entry point
│   ├── SignupScreen.js    # Signup entry point
│   └── WelcomeScreen.js   # Post-authentication screen
├── components/
│   ├── Auth/
│   │   ├── AuthContent.js # Shared login/signup logic and layout
│   │   ├── AuthForm.js    # Email/password form fields
│   │   └── Input.js       # Styled text input
│   └── ui/                # Button, FlatButton, LoadingOverlay, etc.
├── util/
│   └── auth.js            # Firebase REST API helpers (createUser)
├── constants/
│   └── styles.js          # Shared color palette
└── .env.example           # Environment variable template
```

## How Authentication Works

1. **AuthContent** handles form submission and validates credentials before calling `onAuthenticate`.
2. **auth.js** sends signup requests to Firebase:

   ```
   POST https://identitytoolkit.googleapis.com/v1/accounts:signUp?key={API_KEY}
   ```

3. After successful authentication, the app is intended to switch from `AuthStack` (Login/Signup) to `AuthenticatedStack` (Welcome).

## Validation Rules

| Field    | Rule                                      |
| -------- | ----------------------------------------- |
| Email    | Must contain `@`                          |
| Password | Must be longer than 6 characters          |
| Signup   | Email and password must match their confirm fields |

Invalid input shows an alert and highlights the relevant fields.

## License

Private project.
