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

const table = document.getElementById("tbody");
const tableHTML = rechargeLog
  .map(
    (log, index) => `
          <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
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
