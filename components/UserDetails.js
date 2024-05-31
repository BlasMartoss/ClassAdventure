class UserDetails {
  static uid = null;
  static username = null;
  static role = null;
  static email = null;
  static wins = null;
  static pfp = null;

  static setUserDetails({ uid, username, role, email, wins, pfp }) {
    UserDetails.uid = uid;
    UserDetails.username = username;
    UserDetails.role = role;
    UserDetails.email = email;
    UserDetails.wins = wins;
    UserDetails.pfp = pfp;
  }

  static clearUserDetails() {
    UserDetails.uid = null;
    UserDetails.username = null;
    UserDetails.role = null;
    UserDetails.email = null;
    UserDetails.wins = null;
    UserDetails.pfp = null;
  }
}

export default UserDetails;
