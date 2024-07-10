const rechargeLog = [
  {
    id: "PG110001",
    amount: 3000,
    status: "success",
    date: "20/4/2024, 10:15:32am",
    channel: "Paystack",
    txID: "TX12345ABCDE",
    receipt: "verified",
  },
  {
    id: "PG110002",
    amount: 7000,
    status: "failed",
    date: "21/4/2024, 2:30:45pm",
    channel: "Flutterwave",
    txID: "TX67890FGHIJ",
    receipt: "pending",
  },
  {
    id: "PG110003",
    amount: 4500,
    status: "pending",
    date: "22/4/2024, 11:50:10am",
    channel: "Stripe",
    txID: "TX11121JKLMN",
    receipt: "verified",
  },
  {
    id: "PG110004",
    amount: 6000,
    status: "success",
    date: "23/4/2024, 8:25:22pm",
    channel: "PayPal",
    txID: "TX31415OPQRS",
    receipt: "check",
  },
  {
    id: "PG110005",
    amount: 5200,
    status: "success",
    date: "24/4/2024, 7:15:34pm",
    channel: "Kuda",
    txID: "TX16171TUVWX",
    receipt: "verified",
  },
  {
    id: "PG110006",
    amount: 1500,
    status: "failed",
    date: "25/4/2024, 4:45:55pm",
    channel: "Square",
    txID: "TX18282YZABC",
    receipt: "pending",
  },
  {
    id: "PG110007",
    amount: 2500,
    status: "pending",
    date: "26/4/2024, 6:30:48am",
    channel: "Kuda",
    txID: "TX19393DEFGH",
    receipt: "verified",
  },
  {
    id: "PG110008",
    amount: 9000,
    status: "success",
    date: "27/4/2024, 12:10:15pm",
    channel: "Paystack",
    txID: "TX20404IJKLMN",
    receipt: "check",
  },
  {
    id: "PG110009",
    amount: 3500,
    status: "success",
    date: "28/4/2024, 1:20:25pm",
    channel: "Flutterwave",
    txID: "TX21515OPQRS",
    receipt: "verified",
  },
  {
    id: "PG110010",
    amount: 4700,
    status: "pending",
    date: "29/4/2024, 9:55:35am",
    channel: "Stripe",
    txID: "TX22626TUVWX",
    receipt: "pending",
  },
];

const phoneOTP = [
  {
    id: 1,
    amount: 7000,
    status: "failed",
    date: "21/4/2024, 2:30:45pm",
    channel: "Flutterwave",
    txID: "TX67890FGHIJ",
    receipt: "pending",
    phone: "08168478017",
    otp: 4589,
  },
  {
    id: 2,
    amount: 4500,
    status: "pending",
    date: "22/4/2024, 11:50:10am",
    channel: "Stripe",
    txID: "TX11121JKLMN",
    receipt: "verified",
    phone: "08168478017",
    otp: 4589,
  },
  {
    id: 3,
    amount: 6000,
    status: "success",
    date: "23/4/2024, 8:25:22pm",
    channel: "PayPal",
    txID: "TX31415OPQRS",
    receipt: "check",
    phone: "08168478017",
    otp: 4589,
  },
  {
    id: 4,
    amount: 5200,
    status: "success",
    date: "24/4/2024, 7:15:34pm",
    channel: "Kuda",
    txID: "TX16171TUVWX",
    receipt: "verified",
    phone: "08168478017",
    otp: 4589,
  },
  {
    id: 5,
    amount: 1500,
    status: "failed",
    date: "25/4/2024, 4:45:55pm",
    channel: "Square",
    txID: "TX18282YZABC",
    receipt: "pending",
    phone: "08168478017",
    otp: 4589,
  },
  {
    id: 6,
    amount: 2500,
    status: "pending",
    date: "26/4/2024, 6:30:48am",
    channel: "Kuda",
    txID: "TX19393DEFGH",
    receipt: "verified",
    phone: "08168478017",
    otp: 4589,
  },
  {
    id: 7,
    amount: 9000,
    status: "success",
    date: "27/4/2024, 12:10:15pm",
    channel: "Paystack",
    txID: "TX20404IJKLMN",
    receipt: "check",
    phone: "08168478017",
    otp: 4589,
  },
  {
    id: 8,
    amount: 3500,
    status: "success",
    date: "28/4/2024, 1:20:25pm",
    channel: "Flutterwave",
    txID: "TX21515OPQRS",
    receipt: "verified",
    phone: "08168478017",
    otp: 4589,
  },
  {
    id: 9,
    amount: 4700,
    status: "pending",
    date: "29/4/2024, 9:55:35am",
    channel: "Stripe",
    txID: "TX22626TUVWX",
    receipt: "pending",
    phone: "08168478017",
    otp: 4589,
  },
  {
    id: 10,
    amount: 3000,
    status: "success",
    date: "20/4/2024, 10:15:32am",
    channel: "Paystack",
    txID: "TX12345ABCDE",
    receipt: "verified",
  },
];

const userLogs = [
  {
    name: "John Doe",
    lastLogin: "19/4/2024, 5:10:12pm",
    role: "Admin",
    access: "Full",
    remark: "Active user",
  },
  {
    name: "Jane Smith",
    lastLogin: "20/4/2024, 10:15:32am",
    role: "User",
    access: "Limited",
    remark: "Needs profile update",
  },
  {
    name: "Michael Johnson",
    lastLogin: "21/4/2024, 2:30:45pm",
    role: "Moderator",
    access: "Moderate",
    remark: "Recently promoted",
  },
  {
    name: "Emily Davis",
    lastLogin: "22/4/2024, 11:50:10am",
    role: "Admin",
    access: "Full",
    remark: "Active user",
  },
  {
    name: "David Martinez",
    lastLogin: "23/4/2024, 8:25:22pm",
    role: "User",
    access: "Limited",
    remark: "Inactive for a week",
  },
  {
    name: "Sophia Garcia",
    lastLogin: "24/4/2024, 7:15:34pm",
    role: "Admin",
    access: "Full",
    remark: "Regular contributor",
  },
  {
    name: "Chris Brown",
    lastLogin: "25/4/2024, 4:45:55pm",
    role: "User",
    access: "Limited",
    remark: "Pending verification",
  },
  {
    name: "Lisa Wilson",
    lastLogin: "26/4/2024, 6:30:48am",
    role: "Moderator",
    access: "Moderate",
    remark: "Highly active",
  },
  {
    name: "Mark Lee",
    lastLogin: "27/4/2024, 12:10:15pm",
    role: "Admin",
    access: "Full",
    remark: "Recently joined",
  },
  {
    name: "Karen Walker",
    lastLogin: "28/4/2024, 1:20:25pm",
    role: "User",
    access: "Limited",
    remark: "Needs password reset",
  },
];

const ludoGames = [
  {
    gameId: "game_001",
    userId: "user_123",
    winner: "user_123",
    betAmount: 50,
    winAmount: 100,
    dateTime: "2024-06-15T12:00:00Z",
    status: "paid",
  },
  {
    gameId: "game_002",
    userId: "user_456",
    winner: "user_789",
    betAmount: 75,
    winAmount: 150,
    dateTime: "2024-06-15T12:30:00Z",
    status: "paid",
  },
  {
    gameId: "game_003",
    userId: "user_789",
    winner: "user_123",
    betAmount: 100,
    winAmount: 200,
    dateTime: "2024-06-15T13:00:00Z",
    status: "paid",
  },
  {
    gameId: "game_004",
    userId: "user_321",
    winner: "user_456",
    betAmount: 20,
    winAmount: 40,
    dateTime: "2024-06-15T13:30:00Z",
    status: "paid",
  },
  {
    gameId: "game_005",
    userId: "user_654",
    winner: "user_321",
    betAmount: 50,
    winAmount: 100,
    dateTime: "2024-06-15T14:00:00Z",
    status: "paid",
  },
  {
    gameId: "game_006",
    userId: "user_987",
    winner: "user_654",
    betAmount: 30,
    winAmount: 60,
    dateTime: "2024-06-15T14:30:00Z",
    status: "paid",
  },
  {
    gameId: "game_007",
    userId: "user_123",
    winner: "user_987",
    betAmount: 40,
    winAmount: 80,
    dateTime: "2024-06-15T15:00:00Z",
    status: "paid",
  },
  {
    gameId: "game_008",
    userId: "user_456",
    winner: "user_123",
    betAmount: 25,
    winAmount: 50,
    dateTime: "2024-06-15T15:30:00Z",
    status: "paid",
  },
  {
    gameId: "game_009",
    userId: "user_789",
    winner: "user_456",
    betAmount: 60,
    winAmount: 120,
    dateTime: "2024-06-15T16:00:00Z",
    status: "paid",
  },
  {
    gameId: "game_010",
    userId: "user_321",
    winner: "user_789",
    betAmount: 80,
    winAmount: 160,
    dateTime: "2024-06-15T16:30:00Z",
    status: "paid",
  },
];

const soccerGames = [
  {
    gameId: "SG98001",
    userId: "user_123",
    winner: "user_123",
    betAmount: 50,
    winAmount: 100,
    dateTime: "2024-06-15T12:00:00Z",
    status: "paid",
  },
  {
    gameId: "SG98002",
    userId: "user_456",
    winner: "user_789",
    betAmount: 75,
    winAmount: 150,
    dateTime: "2024-06-15T12:30:00Z",
    status: "paid",
  },
  {
    gameId: "SG98003",
    userId: "user_789",
    winner: "user_123",
    betAmount: 100,
    winAmount: 200,
    dateTime: "2024-06-15T13:00:00Z",
    status: "paid",
  },
  {
    gameId: "SG98004",
    userId: "user_321",
    winner: "user_456",
    betAmount: 20,
    winAmount: 40,
    dateTime: "2024-06-15T13:30:00Z",
    status: "paid",
  },
  {
    gameId: "SG98005",
    userId: "user_654",
    winner: "user_321",
    betAmount: 50,
    winAmount: 100,
    dateTime: "2024-06-15T14:00:00Z",
    status: "paid",
  },
  {
    gameId: "SG98006",
    userId: "user_987",
    winner: "user_654",
    betAmount: 30,
    winAmount: 60,
    dateTime: "2024-06-15T14:30:00Z",
    status: "paid",
  },
  {
    gameId: "SG98007",
    userId: "user_123",
    winner: "user_987",
    betAmount: 40,
    winAmount: 80,
    dateTime: "2024-06-15T15:00:00Z",
    status: "paid",
  },
  {
    gameId: "SG98008",
    userId: "user_456",
    winner: "user_123",
    betAmount: 25,
    winAmount: 50,
    dateTime: "2024-06-15T15:30:00Z",
    status: "paid",
  },
  {
    gameId: "SG98009",
    userId: "user_789",
    winner: "user_456",
    betAmount: 60,
    winAmount: 120,
    dateTime: "2024-06-15T16:00:00Z",
    status: "paid",
  },
  {
    gameId: "SG98010",
    userId: "user_321, user_123, user_321",
    winner: "user_789",
    betAmount: 80,
    winAmount: 160,
    dateTime: "2024-06-15T16:30:00Z",
    status: "paid",
  },
];

const fishGames = [
  {
    gameId: "SG98001",
    userId: "user_123",
    winner: "user_123",
    betAmount: 50,
    winAmount: 100,
    dateTime: "2024-06-15T12:00:00Z",
    remark: "Payment processed",
  },
  {
    gameId: "SG98002",
    userId: "user_456",
    winner: "user_789",
    betAmount: 75,
    winAmount: 150,
    dateTime: "2024-06-15T12:30:00Z",
    remark: "Bet settled",
  },
  {
    gameId: "SG98003",
    userId: "user_789",
    winner: "user_123",
    betAmount: 100,
    winAmount: 200,
    dateTime: "2024-06-15T13:00:00Z",
    remark: "Winner paid",
  },
  {
    gameId: "SG98004",
    userId: "user_321",
    winner: "user_456",
    betAmount: 20,
    winAmount: 40,
    dateTime: "2024-06-15T13:30:00Z",
    remark: "Funds transferred",
  },
  {
    gameId: "SG98005",
    userId: "user_654",
    winner: "user_321",
    betAmount: 50,
    winAmount: 100,
    dateTime: "2024-06-15T14:00:00Z",
    remark: "Bet cleared",
  },
  {
    gameId: "SG98006",
    userId: "user_987",
    winner: "user_654",
    betAmount: 30,
    winAmount: 60,
    dateTime: "2024-06-15T14:30:00Z",
    remark: "Winnings paid",
  },
  {
    gameId: "SG98007",
    userId: "user_123",
    winner: "user_987",
    betAmount: 40,
    winAmount: 80,
    dateTime: "2024-06-15T15:00:00Z",
    remark: "Payment complete",
  },
  {
    gameId: "SG98008",
    userId: "user_456",
    winner: "user_123",
    betAmount: 25,
    winAmount: 50,
    dateTime: "2024-06-15T15:30:00Z",
    remark: "Bet paid",
  },
  {
    gameId: "SG98009",
    userId: "user_789",
    winner: "user_456",
    betAmount: 60,
    winAmount: 120,
    dateTime: "2024-06-15T16:00:00Z",
    remark: "Funds settled",
  },
  {
    gameId: "SG98010",
    userId: "user_321",
    winner: "user_789",
    betAmount: 80,
    winAmount: 160,
    dateTime: "2024-06-15T16:30:00Z",
    remark: "Payment processed",
  },
];

const spinGames = [
  {
    gameId: "SG98001",
    userId: "user_123",
    winner: "user_123",
    betAmount: 50,
    winAmount: 100,
    dateTime: "2024-06-15T12:00:00Z",
    remark: "Payment processed",
  },
  {
    gameId: "SG98002",
    userId: "user_456",
    winner: "user_789",
    betAmount: 75,
    winAmount: 150,
    dateTime: "2024-06-15T12:30:00Z",
    remark: "Bet settled",
  },
  {
    gameId: "SG98003",
    userId: "user_789",
    winner: "user_123",
    betAmount: 100,
    winAmount: 200,
    dateTime: "2024-06-15T13:00:00Z",
    remark: "Winner paid",
  },
  {
    gameId: "SG98004",
    userId: "user_321",
    winner: "user_456",
    betAmount: 20,
    winAmount: 40,
    dateTime: "2024-06-15T13:30:00Z",
    remark: "Funds transferred",
  },
  {
    gameId: "SG98005",
    userId: "user_654",
    winner: "user_321",
    betAmount: 50,
    winAmount: 100,
    dateTime: "2024-06-15T14:00:00Z",
    remark: "Bet cleared",
  },
  {
    gameId: "SG98006",
    userId: "user_987",
    winner: "user_654",
    betAmount: 30,
    winAmount: 60,
    dateTime: "2024-06-15T14:30:00Z",
    remark: "Winnings paid",
  },
  {
    gameId: "SG98007",
    userId: "user_123",
    winner: "user_987",
    betAmount: 40,
    winAmount: 80,
    dateTime: "2024-06-15T15:00:00Z",
    remark: "Payment complete",
  },
  {
    gameId: "SG98008",
    userId: "user_456",
    winner: "user_123",
    betAmount: 25,
    winAmount: 50,
    dateTime: "2024-06-15T15:30:00Z",
    remark: "Bet paid",
  },
  {
    gameId: "SG98009",
    userId: "user_789",
    winner: "user_456",
    betAmount: 60,
    winAmount: 120,
    dateTime: "2024-06-15T16:00:00Z",
    remark: "Funds settled",
  },
  {
    gameId: "SG98010",
    userId: "user_321",
    winner: "user_789",
    betAmount: 80,
    winAmount: 160,
    dateTime: "2024-06-15T16:30:00Z",
    remark: "Payment processed",
  },
];

const promoData = [
  {
    promoCode: "SAVE20",
    users: ["user_123"],
    totalUsers: 3,
    totalReviewsGotten: 15,
    reviewsGenerated: 10,
  },
  {
    promoCode: "WELCOME50",
    users: ["user_321", "user_654", "user_987", "user_001"],
    totalUsers: 4,
    totalReviewsGotten: 20,
    reviewsGenerated: 15,
  },
  {
    promoCode: "FREESHIP",
    users: ["user_432", "user_543"],
    totalUsers: 2,
    totalReviewsGotten: 5,
    reviewsGenerated: 3,
  },
  {
    promoCode: "HOLIDAY30",
    users: ["user_213", "user_324", "user_435", "user_546", "user_657"],
    totalUsers: 5,
    totalReviewsGotten: 25,
    reviewsGenerated: 20,
  },
  {
    promoCode: "SPRINGSALE",
    users: ["user_768", "user_879", "user_980", "user_091"],
    totalUsers: 4,
    totalReviewsGotten: 18,
    reviewsGenerated: 14,
  },
  {
    promoCode: "SUMMERFUN",
    users: [
      "user_132",
      "user_243",
      "user_354",
      "user_465",
      "user_576",
      "user_687",
    ],
    totalUsers: 6,
    totalReviewsGotten: 30,
    reviewsGenerated: 25,
  },
  {
    promoCode: "WINTERWARM",
    users: ["user_798", "user_809", "user_910"],
    totalUsers: 3,
    totalReviewsGotten: 10,
    reviewsGenerated: 8,
  },
  {
    promoCode: "FALL50",
    users: ["user_021", "user_132", "user_243"],
    totalUsers: 3,
    totalReviewsGotten: 12,
    reviewsGenerated: 9,
  },
  {
    promoCode: "NEWYEAR2024",
    users: ["user_354", "user_465", "user_576", "user_687", "user_798"],
    totalUsers: 5,
    totalReviewsGotten: 22,
    reviewsGenerated: 18,
  },
  {
    promoCode: "FLASHSALE",
    users: ["user_809", "user_910", "user_101"],
    totalUsers: 3,
    totalReviewsGotten: 8,
    reviewsGenerated: 5,
  },
];

const fraudReports = [
  {
    userId: "user_001",
    amount: 1500.0,
    dateTime: "2024-06-01T10:30:00Z",
    reason: "Multiple failed login attempts",
    actions: "Account locked, investigate activity",
  },
  {
    userId: "user_002",
    amount: 200.0,
    dateTime: "2024-06-02T14:20:00Z",
    reason: "Unusual transaction pattern",
    actions: "Transaction flagged, monitor account",
  },
  {
    userId: "user_003",
    amount: 750.0,
    dateTime: "2024-06-03T09:15:00Z",
    reason: "Chargeback issued",
    actions: "Contact user, review transaction",
  },
  {
    userId: "user_004",
    amount: 5000.0,
    dateTime: "2024-06-04T18:45:00Z",
    reason: "Large withdrawal attempt",
    actions: "Withdrawal blocked, verify identity",
  },
  {
    userId: "user_005",
    amount: 300.0,
    dateTime: "2024-06-05T11:00:00Z",
    reason: "Suspicious IP address",
    actions: "Session terminated, reset password",
  },
  {
    userId: "user_006",
    amount: 1200.0,
    dateTime: "2024-06-06T13:50:00Z",
    reason: "Unusual login location",
    actions: "Account locked, verify user",
  },
  {
    userId: "user_007",
    amount: 400.0,
    dateTime: "2024-06-07T16:35:00Z",
    reason: "High number of transactions",
    actions: "Transactions flagged, review activity",
  },
  {
    userId: "user_008",
    amount: 2300.0,
    dateTime: "2024-06-08T08:25:00Z",
    reason: "Stolen credit card",
    actions: "Transaction reversed, contact issuer",
  },
  {
    userId: "user_009",
    amount: 600.0,
    dateTime: "2024-06-09T20:10:00Z",
    reason: "Account takeover attempt",
    actions: "Account locked, user notified",
  },
  {
    userId: "user_010",
    amount: 950.0,
    dateTime: "2024-06-10T07:40:00Z",
    reason: "Multiple accounts linked",
    actions: "Accounts reviewed, consolidate",
  },
];

const topGames = [
  {
    userId: "PG1102",
    dailyTopup: 150000,
    dailyWithdrawal: 50000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "VIP",
  },
  {
    userId: "PG11032",
    dailyTopup: 100000,
    dailyWithdrawal: 60000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "Regular",
  },
  {
    userId: "PG1102",
    dailyTopup: 150000,
    dailyWithdrawal: 50000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "VIP",
  },
  {
    userId: "PG1102",
    dailyTopup: 150000,
    dailyWithdrawal: 50000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "VIP",
  },
  {
    userId: "PG1102",
    dailyTopup: 150000,
    dailyWithdrawal: 50000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "Normal",
  },
  {
    userId: "PG1102",
    dailyTopup: 150000,
    dailyWithdrawal: 50000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "VIP",
  },
  {
    userId: "PG1402",
    dailyTopup: 150000,
    dailyWithdrawal: 50000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "VIP",
  },
  {
    userId: "PG1102",
    dailyTopup: 150000,
    dailyWithdrawal: 50000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "VIP",
  },
  {
    userId: "PG1102",
    dailyTopup: 150000,
    dailyWithdrawal: 50000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "Regular",
  },
  {
    userId: "PG1102",
    dailyTopup: 150000,
    dailyWithdrawal: 50000,
    dateTime: "2024-06-01T10:30:00Z",
    status: "Normal",
  },
];

const table = document.getElementById("tbody");
const tableHTML = rechargeLog
  .map(
    (log, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${log.id}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.amount}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white"><span class="bg-red-100 text-red-800 text-sm me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">${log.status}</span>
          </td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.date}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.channel}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.txID}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.receipt}</td>
        </tr>

      `
  )
  .join("");
table.innerHTML = tableHTML;

const tableRecharge = document.getElementById("tbodyRecharge");
const tableRechargeHTML = rechargeLog
  .map(
    (log, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${log.amount}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.status}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.date}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white"><span class="bg-red-100 text-red-800 text-sm me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">${log.channel} </span>
          </td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.id}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.txID}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.receipt}</td>
        </tr>

      `
  )
  .join("");
tableRecharge.innerHTML = tableRechargeHTML;

const tableOTP = document.getElementById("tbodyOTP");
const tableOTPHTML = phoneOTP
  .map(
    (log, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${log.id}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.phone}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.otp}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.channel}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white"><span class="bg-red-100 text-red-800 text-sm me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">${log.status} </span>
          </td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.date}</td>
        </tr>

      `
  )
  .join("");
tableOTP.innerHTML = tableOTPHTML;

const tableUserSetting = document.getElementById("tbodyUserSetting");
const tableUserSettingHTML = userLogs
  .map(
    (log, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${log.name}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.lastLogin}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.role}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.access}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.remark}</td>
        </tr>

      `
  )
  .join("");
tableUserSetting.innerHTML = tableUserSettingHTML;

const tableLudo = document.getElementById("tbodyLudo");
const tableLudoHTML = ludoGames
  .map(
    (game, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${game.gameId}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.userId}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.winner}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.betAmount}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.winAmount}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.dateTime}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white"><span class="bg-green-100 text-green-800 text-sm me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">${game.status}</span>
          </td>
        </tr>

      `
  )
  .join("");
tableLudo.innerHTML = tableLudoHTML;

const tableSoccer = document.getElementById("tbodySoccer");
const tableSoccerHTML = soccerGames
  .map(
    (game, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${game.gameId}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.userId}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.winner}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.betAmount}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.winAmount}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.dateTime}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white"><span class="bg-green-100 text-green-800 text-sm me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">${game.status}</span>
          </td>
        </tr>

      `
  )
  .join("");
tableSoccer.innerHTML = tableSoccerHTML;

const tableFish = document.getElementById("tbodyFish");
const tableFishHTML = fishGames
  .map(
    (game, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${game.userId}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.gameId}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.betAmount}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.winAmount}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.dateTime}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.remark}</td>
        </tr>

      `
  )
  .join("");
tableFish.innerHTML = tableFishHTML;

const tableSpin = document.getElementById("tbodySpin");
const tableSpinHTML = spinGames
  .map(
    (game, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${game.userId}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.gameId}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.betAmount}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.winAmount}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.dateTime}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${game.remark}</td>
        </tr>

      `
  )
  .join("");
tableSpin.innerHTML = tableSpinHTML;

const tableAgentModel = document.getElementById("tbodyAgentModel");
const tableAgentModelHTML = promoData
  .map(
    (user, index) => `
         <tr
                    class="bg-white border-b dark:bg-dark200 dark:border-dark100 hover:bg-gray-50 dark:hover:bg-dark500"
                  >
                    <th scope="row" class="font-normal px-6 py-4 text-gray-900 dark:text-white">
                     ${user.promoCode}
                    </th>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                    ${user.users}
                    </td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                    ${user.totalUsers}
                    </td><td class="px-6 py-4 text-gray-900 dark:text-white">
                    ${user.totalReviewsGotten}
                    </td><td class="px-6 py-4 text-gray-900 dark:text-white">
                    ${user.reviewsGenerated}
                    </td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                      <!-- Modal toggle -->
                        <a
                          href="#"
                          type="button"
                          data-modal-target="removeAgentModal"
                          data-modal-show="removeAgentModal"
                          class="w-fit truncate text-white font-bold shadow hover:scale-[1.2] rounded-full px-5 py-2 bg-primary"
                          >Remove Agent</a
                        >
                    </td>
                  </tr>

      `
  )
  .join("");
tableAgentModel.innerHTML = tableAgentModelHTML;

const fraudModel = document.getElementById("tbodyFraud");
const tableFraudHTML = fraudReports
  .map(
    (user, index) => `
        <tr
                    class="bg-white border-b dark:bg-dark200 dark:border-dark100 hover:bg-gray-50 dark:hover:bg-dark500"
                  >
                    <th scope="row" class="font-normal px-6 py-4 text-gray-900 dark:text-white">${user.userId}</th>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">${user.amount}</td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">${user.dateTime}</td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                    ${user.reason}
                    </td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                      <!-- Modal toggle -->
                      <div class="flex items-center flex-wrap gap-3 lg:gap-6">
                        <a
                          href="#"
                          type="button"
                          data-modal-target="deductAmount-modal"
                          data-modal-show="deductAmount-modal"
                          class="w-fit truncate text-white font-bold shadow hover:scale-[1.2] rounded-full px-5 py-2 bg-rose-800"
                          >Deduct Amount</a
                        >
                        <a
                          href="#"
                          type="button"
                          data-modal-target="banUser-modal"
                          data-modal-show="banUser-modal"
                          class="w-fit truncate text-white font-bold shadow hover:scale-[1.2] rounded-full px-5 py-2 bg-rose-800"
                          >Ban User</a
                        >
                        <a
                          href="#"
                          type="button"
                          data-modal-target="deleteUser-modal"
                          data-modal-show="deleteUser-modal"
                          class="w-fit truncate text-white font-bold shadow hover:scale-[1.2] rounded-full px-5 py-2 bg-rose-800"
                          >Delete User</a
                        >
                      </div>
                    </td>
                  </tr>

      `
  )
  .join("");
tableFraud.innerHTML = tableFraudHTML;

const tableCheck = document.getElementById("tableCheck");
const tableCheckHTML = spinGames
  .map(
    (user, index) => `
        <tr
                    class="bg-white border-b dark:bg-dark200 dark:border-dark100 hover:bg-gray-50 dark:hover:bg-dark500"
                  >
                    <th scope="row" class="font-normal px-6 py-4 text-gray-900 dark:text-white">${index}</th>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">${user.userId}</td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">${user.betAmount}</td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">${user.winAmount}</td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">${user.winAmount}</td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                    200,000
                    </td>
                  </tr>

      `
  )
  .join("");
tableCheck.innerHTML = tableCheckHTML;

const tableTopUp = document.getElementById("tbodyTopUp");
const tableTopUpHTML = spinGames
  .map(
    (log, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${index + 1}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.userId}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${
            log.betAmount
          }</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${
            log.winAmount
          }</td>
        </tr>

      `
  )
  .join("");
tableTopUp.innerHTML = tableTopUpHTML;

const tableUnReg = document.getElementById("tbodyUnReg");
const tableUnRegHTML = phoneOTP
  .map(
    (log, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${index + 1}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.phone}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.date}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.otp}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.otp}</td>
        </tr>

      `
  )
  .join("");
tableUnReg.innerHTML = tableUnRegHTML;

const tableTopGames = document.getElementById("tbodyTopGames");
const tableTopGamesHTML = topGames
  .map(
    (log, index) => `
          <tr
          class="bg-white border-b dark:bg-dark200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark500"
        >
          <th
            scope="row"
            class="font-normal px-6 py-4 text-gray-900 dark:text-white text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${index + 1}
          </th>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.userId}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${
            log.dailyTopup
          }</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${
            log.dailyWithdrawal
          }</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${
            log.dateTime
          }</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">${log.status}</td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">
          <div class="flex items-center justify-between">
            <button type="button" class="text-gray-600 text-xs bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2">Yes</button>
            <button type="button" class="text-gray-600 text-xs bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2 me-2">No</button>
          </div>
          </td>
        </tr>

      `
  )
  .join("");
tableTopGames.innerHTML = tableTopGamesHTML;
