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
      remark: "Active user"
  },
  {
      name: "Jane Smith",
      lastLogin: "20/4/2024, 10:15:32am",
      role: "User",
      access: "Limited",
      remark: "Needs profile update"
  },
  {
      name: "Michael Johnson",
      lastLogin: "21/4/2024, 2:30:45pm",
      role: "Moderator",
      access: "Moderate",
      remark: "Recently promoted"
  },
  {
      name: "Emily Davis",
      lastLogin: "22/4/2024, 11:50:10am",
      role: "Admin",
      access: "Full",
      remark: "Active user"
  },
  {
      name: "David Martinez",
      lastLogin: "23/4/2024, 8:25:22pm",
      role: "User",
      access: "Limited",
      remark: "Inactive for a week"
  },
  {
      name: "Sophia Garcia",
      lastLogin: "24/4/2024, 7:15:34pm",
      role: "Admin",
      access: "Full",
      remark: "Regular contributor"
  },
  {
      name: "Chris Brown",
      lastLogin: "25/4/2024, 4:45:55pm",
      role: "User",
      access: "Limited",
      remark: "Pending verification"
  },
  {
      name: "Lisa Wilson",
      lastLogin: "26/4/2024, 6:30:48am",
      role: "Moderator",
      access: "Moderate",
      remark: "Highly active"
  },
  {
      name: "Mark Lee",
      lastLogin: "27/4/2024, 12:10:15pm",
      role: "Admin",
      access: "Full",
      remark: "Recently joined"
  },
  {
      name: "Karen Walker",
      lastLogin: "28/4/2024, 1:20:25pm",
      role: "User",
      access: "Limited",
      remark: "Needs password reset"
  }
];

const ludoGames = [
  {
      gameId: "game_001",
      userId: "user_123",
      winner: "user_123",
      betAmount: 50,
      winAmount: 100,
      dateTime: "2024-06-15T12:00:00Z",
      status: "paid"
  },
  {
      gameId: "game_002",
      userId: "user_456",
      winner: "user_789",
      betAmount: 75,
      winAmount: 150,
      dateTime: "2024-06-15T12:30:00Z",
      status: "paid"
  },
  {
      gameId: "game_003",
      userId: "user_789",
      winner: "user_123",
      betAmount: 100,
      winAmount: 200,
      dateTime: "2024-06-15T13:00:00Z",
      status: "paid"
  },
  {
      gameId: "game_004",
      userId: "user_321",
      winner: "user_456",
      betAmount: 20,
      winAmount: 40,
      dateTime: "2024-06-15T13:30:00Z",
      status: "paid"
  },
  {
      gameId: "game_005",
      userId: "user_654",
      winner: "user_321",
      betAmount: 50,
      winAmount: 100,
      dateTime: "2024-06-15T14:00:00Z",
      status: "paid"
  },
  {
      gameId: "game_006",
      userId: "user_987",
      winner: "user_654",
      betAmount: 30,
      winAmount: 60,
      dateTime: "2024-06-15T14:30:00Z",
      status: "paid"
  },
  {
      gameId: "game_007",
      userId: "user_123",
      winner: "user_987",
      betAmount: 40,
      winAmount: 80,
      dateTime: "2024-06-15T15:00:00Z",
      status: "paid"
  },
  {
      gameId: "game_008",
      userId: "user_456",
      winner: "user_123",
      betAmount: 25,
      winAmount: 50,
      dateTime: "2024-06-15T15:30:00Z",
      status: "paid"
  },
  {
      gameId: "game_009",
      userId: "user_789",
      winner: "user_456",
      betAmount: 60,
      winAmount: 120,
      dateTime: "2024-06-15T16:00:00Z",
      status: "paid"
  },
  {
      gameId: "game_010",
      userId: "user_321",
      winner: "user_789",
      betAmount: 80,
      winAmount: 160,
      dateTime: "2024-06-15T16:30:00Z",
      status: "paid"
  }
];

const soccerGames = [
  {
      gameId: "SG98001",
      userId: "user_123",
      winner: "user_123",
      betAmount: 50,
      winAmount: 100,
      dateTime: "2024-06-15T12:00:00Z",
      status: "paid"
  },
  {
      gameId: "SG98002",
      userId: "user_456",
      winner: "user_789",
      betAmount: 75,
      winAmount: 150,
      dateTime: "2024-06-15T12:30:00Z",
      status: "paid"
  },
  {
      gameId: "SG98003",
      userId: "user_789",
      winner: "user_123",
      betAmount: 100,
      winAmount: 200,
      dateTime: "2024-06-15T13:00:00Z",
      status: "paid"
  },
  {
      gameId: "SG98004",
      userId: "user_321",
      winner: "user_456",
      betAmount: 20,
      winAmount: 40,
      dateTime: "2024-06-15T13:30:00Z",
      status: "paid"
  },
  {
      gameId: "SG98005",
      userId: "user_654",
      winner: "user_321",
      betAmount: 50,
      winAmount: 100,
      dateTime: "2024-06-15T14:00:00Z",
      status: "paid"
  },
  {
      gameId: "SG98006",
      userId: "user_987",
      winner: "user_654",
      betAmount: 30,
      winAmount: 60,
      dateTime: "2024-06-15T14:30:00Z",
      status: "paid"
  },
  {
      gameId: "SG98007",
      userId: "user_123",
      winner: "user_987",
      betAmount: 40,
      winAmount: 80,
      dateTime: "2024-06-15T15:00:00Z",
      status: "paid"
  },
  {
      gameId: "SG98008",
      userId: "user_456",
      winner: "user_123",
      betAmount: 25,
      winAmount: 50,
      dateTime: "2024-06-15T15:30:00Z",
      status: "paid"
  },
  {
      gameId: "SG98009",
      userId: "user_789",
      winner: "user_456",
      betAmount: 60,
      winAmount: 120,
      dateTime: "2024-06-15T16:00:00Z",
      status: "paid"
  },
  {
      gameId: "SG98010",
      userId: "user_321, user_123, user_321",
      winner: "user_789",
      betAmount: 80,
      winAmount: 160,
      dateTime: "2024-06-15T16:30:00Z",
      status: "paid"
  }
];

const fishGames = [
  {
      gameId: "SG98001",
      userId: "user_123",
      winner: "user_123",
      betAmount: 50,
      winAmount: 100,
      dateTime: "2024-06-15T12:00:00Z",
      remark: "Payment processed"
  },
  {
      gameId: "SG98002",
      userId: "user_456",
      winner: "user_789",
      betAmount: 75,
      winAmount: 150,
      dateTime: "2024-06-15T12:30:00Z",
      remark: "Bet settled"
  },
  {
      gameId: "SG98003",
      userId: "user_789",
      winner: "user_123",
      betAmount: 100,
      winAmount: 200,
      dateTime: "2024-06-15T13:00:00Z",
      remark: "Winner paid"
  },
  {
      gameId: "SG98004",
      userId: "user_321",
      winner: "user_456",
      betAmount: 20,
      winAmount: 40,
      dateTime: "2024-06-15T13:30:00Z",
      remark: "Funds transferred"
  },
  {
      gameId: "SG98005",
      userId: "user_654",
      winner: "user_321",
      betAmount: 50,
      winAmount: 100,
      dateTime: "2024-06-15T14:00:00Z",
      remark: "Bet cleared"
  },
  {
      gameId: "SG98006",
      userId: "user_987",
      winner: "user_654",
      betAmount: 30,
      winAmount: 60,
      dateTime: "2024-06-15T14:30:00Z",
      remark: "Winnings paid"
  },
  {
      gameId: "SG98007",
      userId: "user_123",
      winner: "user_987",
      betAmount: 40,
      winAmount: 80,
      dateTime: "2024-06-15T15:00:00Z",
      remark: "Payment complete"
  },
  {
      gameId: "SG98008",
      userId: "user_456",
      winner: "user_123",
      betAmount: 25,
      winAmount: 50,
      dateTime: "2024-06-15T15:30:00Z",
      remark: "Bet paid"
  },
  {
      gameId: "SG98009",
      userId: "user_789",
      winner: "user_456",
      betAmount: 60,
      winAmount: 120,
      dateTime: "2024-06-15T16:00:00Z",
      remark: "Funds settled"
  },
  {
      gameId: "SG98010",
      userId: "user_321, user_123, user_321",
      winner: "user_789",
      betAmount: 80,
      winAmount: 160,
      dateTime: "2024-06-15T16:30:00Z",
      remark: "Payment processed"
  }
];

const spinGames = [
  {
      gameId: "SG98001",
      userId: "user_123",
      winner: "user_123",
      betAmount: 50,
      winAmount: 100,
      dateTime: "2024-06-15T12:00:00Z",
      remark: "Payment processed"
  },
  {
      gameId: "SG98002",
      userId: "user_456",
      winner: "user_789",
      betAmount: 75,
      winAmount: 150,
      dateTime: "2024-06-15T12:30:00Z",
      remark: "Bet settled"
  },
  {
      gameId: "SG98003",
      userId: "user_789",
      winner: "user_123",
      betAmount: 100,
      winAmount: 200,
      dateTime: "2024-06-15T13:00:00Z",
      remark: "Winner paid"
  },
  {
      gameId: "SG98004",
      userId: "user_321",
      winner: "user_456",
      betAmount: 20,
      winAmount: 40,
      dateTime: "2024-06-15T13:30:00Z",
      remark: "Funds transferred"
  },
  {
      gameId: "SG98005",
      userId: "user_654",
      winner: "user_321",
      betAmount: 50,
      winAmount: 100,
      dateTime: "2024-06-15T14:00:00Z",
      remark: "Bet cleared"
  },
  {
      gameId: "SG98006",
      userId: "user_987",
      winner: "user_654",
      betAmount: 30,
      winAmount: 60,
      dateTime: "2024-06-15T14:30:00Z",
      remark: "Winnings paid"
  },
  {
      gameId: "SG98007",
      userId: "user_123",
      winner: "user_987",
      betAmount: 40,
      winAmount: 80,
      dateTime: "2024-06-15T15:00:00Z",
      remark: "Payment complete"
  },
  {
      gameId: "SG98008",
      userId: "user_456",
      winner: "user_123",
      betAmount: 25,
      winAmount: 50,
      dateTime: "2024-06-15T15:30:00Z",
      remark: "Bet paid"
  },
  {
      gameId: "SG98009",
      userId: "user_789",
      winner: "user_456",
      betAmount: 60,
      winAmount: 120,
      dateTime: "2024-06-15T16:00:00Z",
      remark: "Funds settled"
  },
  {
      gameId: "SG98010",
      userId: "user_321, user_123, user_321",
      winner: "user_789",
      betAmount: 80,
      winAmount: 160,
      dateTime: "2024-06-15T16:30:00Z",
      remark: "Payment processed"
  }
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
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${log.id}
          </th>
          <td class="px-6 py-4">${log.amount}</td>
          <td class="px-6 py-4"><span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">${log.status} </span>
          </td>
          <td class="px-6 py-4">${log.date}</td>
          <td class="px-6 py-4">${log.channel}</td>
          <td class="px-6 py-4">${log.txID}</td>
          <td class="px-6 py-4">${log.receipt}</td>
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
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${log.amount}
          </th>
          <td class="px-6 py-4">${log.status}</td>
          <td class="px-6 py-4">${log.date}</td>
          <td class="px-6 py-4"><span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">${log.channel} </span>
          </td>
          <td class="px-6 py-4">${log.id}</td>
          <td class="px-6 py-4">${log.txID}</td>
          <td class="px-6 py-4">${log.receipt}</td>
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
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${log.id}
          </th>
          <td class="px-6 py-4">${log.phone}</td>
          <td class="px-6 py-4">${log.otp}</td>
          <td class="px-6 py-4">${log.channel}</td>
          <td class="px-6 py-4"><span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">${log.status} </span>
          </td>
          <td class="px-6 py-4">${log.date}</td>
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
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${log.name}
          </th>
          <td class="px-6 py-4">${log.lastLogin}</td>
          <td class="px-6 py-4">${log.role}</td>
          <td class="px-6 py-4">${log.access}</td>
          <td class="px-6 py-4">${log.remark}</td>
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
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${game.gameId}
          </th>
          <td class="px-6 py-4">${game.userId}</td>
          <td class="px-6 py-4">${game.winner}</td>
          <td class="px-6 py-4">${game.betAmount}</td>
          <td class="px-6 py-4">${game.winAmount}</td>
          <td class="px-6 py-4">${game.dateTime}</td>
          <td class="px-6 py-4"><span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">${game.status}</span>
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
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${game.gameId}
          </th>
          <td class="px-6 py-4">${game.userId}</td>
          <td class="px-6 py-4">${game.winner}</td>
          <td class="px-6 py-4">${game.betAmount}</td>
          <td class="px-6 py-4">${game.winAmount}</td>
          <td class="px-6 py-4">${game.dateTime}</td>
          <td class="px-6 py-4"><span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">${game.status}</span>
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
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${game.userId}
          </th>
          <td class="px-6 py-4">${game.gameId}</td>
          <td class="px-6 py-4">${game.betAmount}</td>
          <td class="px-6 py-4">${game.winAmount}</td>
          <td class="px-6 py-4">${game.dateTime}</td>
          <td class="px-6 py-4">${game.remark}</td>
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
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           ${game.userId}
          </th>
          <td class="px-6 py-4">${game.gameId}</td>
          <td class="px-6 py-4">${game.betAmount}</td>
          <td class="px-6 py-4">${game.winAmount}</td>
          <td class="px-6 py-4">${game.dateTime}</td>
          <td class="px-6 py-4">${game.remark}</td>
        </tr>

      `
  )
  .join("");
tableSpin.innerHTML = tableSpinHTML;