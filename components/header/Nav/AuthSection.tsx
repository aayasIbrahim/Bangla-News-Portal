import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

interface AuthSectionProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthSection: React.FC<AuthSectionProps> = ({ isOpen, setIsOpen }) => {
  const { data: session } = useSession();

  return (
    <div className="flex space-x-0 ml-4">
      <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition rounded-l-lg">
        Eng
      </button>

      {session ? (
        // ---------- USER LOGGED IN → SHOW LOGOUT ----------
        <button
          onClick={() => {
            setIsOpen(false);
            signOut();
          }}
          className="px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 transition rounded-r-lg"
        >
          Logout
        </button>
      ) : (
        // ---------- USER NOT LOGGED IN → SHOW LOGIN ----------
        <Link
          href="/login"
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition rounded-r-lg"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthSection;
