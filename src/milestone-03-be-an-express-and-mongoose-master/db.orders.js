export const db = {
  orders: [
    {
      _id: {
        $oid: "654de5f6198dfb2206026d0c",
      },
      userId: {
        $oid: "6406ad63fc13ae5a40000065",
      },
      order_number: 1,
      created_at: {
        $date: "2023-03-07T09:20:03.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a0",
          },
          name: "Product 1",
          quantity: 2,
          price: 15.99,
        },
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a1",
          },
          name: "Product 2",
          quantity: 1,
          price: 29.99,
        },
      ],
      total_amount: 61.97,
      status: "Pending",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d0d",
      },
      userId: {
        $oid: "6406ad63fc13ae5a40000066",
      },
      order_number: 2,
      created_at: {
        $date: "2023-03-07T09:20:03.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a2",
          },
          name: "Product 4",
          quantity: 3,
          price: 9.99,
        },
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a3",
          },
          name: "Product 5",
          quantity: 1,
          price: 19.99,
        },
      ],
      total_amount: 39.96,
      status: "Shipped",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d0e",
      },
      userId: {
        $oid: "6406ad63fc13ae5a40000067",
      },
      order_number: 3,
      created_at: {
        $date: "2023-03-07T09:20:03.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a4",
          },
          name: "Product 3",
          quantity: 2,
          price: 12.99,
        },
      ],
      total_amount: 25.98,
      status: "Pending",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d0f",
      },
      userId: {
        $oid: "6406ad63fc13ae5a40000068",
      },
      order_number: 4,
      created_at: {
        $date: "2023-03-07T09:20:03.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a5",
          },
          name: "Product 6",
          quantity: 2,
          price: 24.99,
        },
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a6",
          },
          name: "Product 7",
          quantity: 1,
          price: 39.99,
        },
      ],
      total_amount: 89.97,
      status: "Processing",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d10",
      },
      userId: {
        $oid: "6406ad63fc13ae5a40000069",
      },
      order_number: 5,
      created_at: {
        $date: "2023-03-07T09:20:03.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a7",
          },
          name: "Product 8",
          quantity: 3,
          price: 17.99,
        },
      ],
      total_amount: 53.97,
      status: "Shipped",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d11",
      },
      userId: {
        $oid: "6406ad63fc13ae5a4000006a",
      },
      order_number: 6,
      created_at: {
        $date: "2023-03-07T09:20:03.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a8",
          },
          name: "Product 9",
          quantity: 1,
          price: 49.99,
        },
      ],
      total_amount: 49.99,
      status: "Delivered",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d12",
      },
      userId: {
        $oid: "6406ad63fc13ae5a4000006b",
      },
      order_number: 7,
      created_at: {
        $date: "2023-03-07T09:20:03.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000a9",
          },
          name: "Product 10",
          quantity: 2,
          price: 19.99,
        },
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000aa",
          },
          name: "Product 11",
          quantity: 1,
          price: 29.99,
        },
      ],
      total_amount: 69.97,
      status: "Pending",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d13",
      },
      userId: {
        $oid: "6406ad63fc13ae5a4000006c",
      },
      order_number: 8,
      created_at: {
        $date: "2023-03-07T09:20:04.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000ab",
          },
          name: "Product 13",
          quantity: 3,
          price: 14.99,
        },
      ],
      total_amount: 44.97,
      status: "Shipped",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d14",
      },
      userId: {
        $oid: "6406ad63fc13ae5a4000006d",
      },
      order_number: 9,
      created_at: {
        $date: "2023-03-07T09:20:04.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000ac",
          },
          name: "Product 14",
          quantity: 2,
          price: 22.99,
        },
      ],
      total_amount: 45.98,
      status: "Processing",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d15",
      },
      userId: {
        $oid: "6406ad65fc13ae5a400000c7",
      },
      order_number: 10,
      created_at: {
        $date: "2023-03-07T09:20:04.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000ad",
          },
          name: "Product 15",
          quantity: 1,
          price: 34.99,
        },
      ],
      total_amount: 34.99,
      status: "Delivered",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d16",
      },
      userId: {
        $oid: "6406ad63fc13ae5a4000006f",
      },
      order_number: 11,
      created_at: {
        $date: "2023-03-07T09:20:04.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000ae",
          },
          name: "Product 16",
          quantity: 2,
          price: 19.99,
        },
      ],
      total_amount: 39.98,
      status: "Pending",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d17",
      },
      userId: {
        $oid: "6406ad63fc13ae5a40000070",
      },
      order_number: 12,
      created_at: {
        $date: "2023-03-07T09:20:04.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000af",
          },
          name: "Product 17",
          quantity: 3,
          price: 16.99,
        },
      ],
      total_amount: 50.97,
      status: "Pending",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d18",
      },
      userId: {
        $oid: "6406ad63fc13ae5a40000065",
      },
      order_number: 13,
      created_at: {
        $date: "2023-03-07T09:20:05.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000b0",
          },
          name: "Product 18",
          quantity: 1,
          price: 19.99,
        },
      ],
      total_amount: 19.99,
      status: "Processing",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d19",
      },
      userId: {
        $oid: "6406ad63fc13ae5a40000072",
      },
      order_number: 14,
      created_at: {
        $date: "2023-03-07T09:20:05.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000b1",
          },
          name: "Product 19",
          quantity: 2,
          price: 32.99,
        },
      ],
      total_amount: 65.98,
      status: "Shipped",
    },
    {
      _id: {
        $oid: "654de5f6198dfb2206026d1a",
      },
      userId: {
        $oid: "6406ad63fc13ae5a40000065",
      },
      order_number: 15,
      created_at: {
        $date: "2023-03-07T09:20:05.000Z",
      },
      products: [
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000b2",
          },
          name: "Product 20",
          quantity: 1,
          price: 14.99,
        },
        {
          product_id: {
            $oid: "6406ad64fc13ae5a400000b3",
          },
          name: "Product 21",
          quantity: 2,
          price: 25.99,
        },
      ],
      total_amount: 40.98,
      status: "Delivered",
    },
  ],
};
