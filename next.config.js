module.exports = {
  reactStrictMode: true,
  async rewrites(){
    return[
      {
        source: '/signup',
        destination: '/UserPages/SignUp/SignUp'
      },
      {
        source: '/signupfinalise',
        destination: '/UserPages/SignUp/SignUpFinal'
      },
      {
        source: '/login',
        destination: '/UserPages/Login/Login'
      },
      {
        source: '/verify',
        destination: '/UserPages/Verify/OTP'
      },
      {
        source: '/createpassword',
        destination: '/UserPages/Recovery/CreatePassword'
      },
      {
        source: '/resetpassword',
        destination: '/UserPages/Recovery/ResetPassword'
      },
      { 
        source: '/donate',
        destination: '/DonorPage/DonorPage'
      },
      { 
        source: '/fundraisercampaigns',
        destination: '/Campaigns/FundraiserCampaigns'
      },
      { 
        source: '/createcampaign',
        destination: '/Campaigns/CreateCampaign'
      },
      { 
        source: '/createdescription',
        destination: '/Campaigns/CreateDescription'
      },
      { 
        source: '/adddocument',
        destination: '/Campaigns/AddDocument'
      },
      { 
        source: '/createcampaign',
        destination: '/Campaigns/CreateCampaign'
      },
      { 
        source: '/gallery',
        destination: '/Campaigns/Gallery'
      },
      { 
        source: '/publish',
        destination: '/Campaigns/Publish'
      },
      { 
        source: '/editprofile',
        destination: '/Profile/EditProfile'
      },
      { 
        source: '/profile',
        destination: '/Profile/Profile'
      },
      { 
        source: '/stories',
        destination: '/StoriesPage/StoriesPage'
      },
      { 
        source: '/donations',
        destination: '/Donations/Donations'
      },
      { 
        source: '/analytics',
        destination: '/Analytics/Analytics'
      },
    ]
  }
}
