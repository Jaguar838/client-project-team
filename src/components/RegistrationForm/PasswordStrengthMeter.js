import React from 'react';
import zxcvbn from 'zxcvbn';
import './RegistrationForm.scss';

const PasswordStrengthMete = ({ password }) => {
  const testResult = zxcvbn(password);
  //   const num = (testResult.score * 100) / 4;
  //   console.log(num);

  //   const changePasswordCollor = () => ({
  //       with:
  //   })

  const createPasswordLabel = result => {
    switch (result.score) {
      case 0:
        return 'Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Weak';
    }
  };

  return (
    <div className="progressbar">
      <progress
        className={`password-strength-meter-progress strength-${createPasswordLabel(
          testResult,
        )}`}
        value={testResult.score}
        max="4"
      />
      <label className="password-strength-meter-label">
        {password && (
          <>
            {/* <strong>Password strength:</strong>{' '} */}
            {createPasswordLabel(testResult)}
          </>
        )}
      </label>
    </div>
  );
};

export default PasswordStrengthMete;
