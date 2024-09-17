import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
      setSearch({});
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setShowSignIn(false);
  };
  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link>
          <img src='/zlogo.png' className='h-14' />
        </Link>
        <div className='flex gap-8'>
          <SignedOut>
            <Button variant='outline' onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label='My Jobs'
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href='/jobs'
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Link
                  label='Saved Jobs'
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href='/saved-job'
                />
              </UserButton.MenuItems>
            </UserButton>

            {user?.unsafeMetadata.role === "recruiter" && (
              <Link
                to='/post-job'
                className={`rounded-full ${buttonVariants({
                  variant: "destructive",
                })}`}
              >
                <PenBox size={20} className='mr-2' />
                Post a Job
              </Link>
            )}
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <dvi
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl='/onboarding'
            fallbackRedirectUrl='/onboarding'
          />
        </dvi>
      )}
    </>
  );
};

export default Header;
