exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          id: 1111,
          name: "Blackwidow V3 Mini Hyperspeed",
          small_image:
            "https://assets2.razerzone.com/images/pnx.assets/b741a04759a128fc7431f83e3ff9472b/razer-blackwidow-v3-mini-hyperspeed_ogimage-1200x630.jpg",
          medium_image:
            "https://assets2.razerzone.com/images/pnx.assets/b741a04759a128fc7431f83e3ff9472b/razer-blackwidow-v3-mini-hyperspeed_ogimage-1200x630.jpg",
          large_image:
            "https://assets2.razerzone.com/images/pnx.assets/b741a04759a128fc7431f83e3ff9472b/razer-blackwidow-v3-mini-hyperspeed_ogimage-1200x630.jpg",
          is_active: true,
          unit_price: 19.5,
          alt_price: 18.0,
          unit_count: 9,
          short_description:
            "Wireless 65% Mechanical Gaming Keyboard with Razer Chroma™ RGB",
          description:
            "ompact enough for any space, and versatile enough for all setups—this is the Razer BlackWidow V3 Mini HyperSpeed. Enjoy seamless gaming in a sleek package with a wireless 65% mechanical gaming keyboard that’s the perfect balance of form and function.",
          featured: false,
          created_at: new Date(),
          updated_at: new Date(),
          brand_id: 1111,
        },
        {
          id: 2222,
          name: "Huntsman Mini",
          small_image:
            "https://assets3.razerzone.com/RpUeXnt4tNXUKhKXFgAECtspNSE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbc%2Fhe8%2F9081238388766%2Fhuntsman-mini-black-1.jpg",
          medium_image:
            "https://assets3.razerzone.com/RpUeXnt4tNXUKhKXFgAECtspNSE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbc%2Fhe8%2F9081238388766%2Fhuntsman-mini-black-1.jpg",
          large_image:
            "https://assets3.razerzone.com/RpUeXnt4tNXUKhKXFgAECtspNSE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbc%2Fhe8%2F9081238388766%2Fhuntsman-mini-black-1.jpg",
          is_active: true,
          unit_price: 22.5,
          alt_price: null,
          unit_count: 7,
          short_description: "60% Gaming Keyboard with Razer™ Optical Switch",
          description:
            "Enter a new dimension of deadly with the Razer Huntsman Mini—a 60% gaming keyboard with cutting-edge Razer Optical Switches. Highly portable and ideal for streamlined setups, it’s time to experience lightning-fast actuation in our most compact form factor yet.",
          featured: false,
          created_at: new Date(),
          updated_at: new Date(),
          brand_id: 1111,
        },
        {
          id: 3333,
          name: "Optix MAG272QR",
          small_image:
            "https://asset.msi.com/resize/image/global/product/product_0_20190816025709_5d561b853090d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
          medium_image:
            "https://asset.msi.com/resize/image/global/product/product_0_20190816025709_5d561b853090d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
          large_image:
            "https://asset.msi.com/resize/image/global/product/product_0_20190816025709_5d561b853090d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
          is_active: true,
          unit_price: 50,
          alt_price: 46,
          unit_count: 3,
          short_description:
            "Esports gaming monitor tailored for professional eSports tournament",
          description:
            "The MAG series was born through rigorous quality testing and designed to be a symbol of sturdiness and durability. Focused on providing the best user experience, the MAG series has a simple installation process coupled with a friendly user interface making it the best choice for entry level gamers.",
          featured: false,
          created_at: new Date(),
          updated_at: new Date(),
          brand_id: 2222,
        },
        {
          id: 4444,
          name: "Cloud Alpha",
          small_image:
            "https://asset.msi.com/resize/image/global/product/product_0_20190816025709_5d561b853090d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
          medium_image:
            "https://asset.msi.com/resize/image/global/product/product_0_20190816025709_5d561b853090d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
          large_image:
            "https://asset.msi.com/resize/image/global/product/product_0_20190816025709_5d561b853090d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
          is_active: true,
          unit_price: 50,
          alt_price: 46,
          unit_count: 3,
          short_description: "Pro Gaming Headset",
          description:
            "HyperX™ Cloud Alpha’s groundbreaking Dual Chamber Drivers design will give your audio more distinction and clarity by reducing the distortion.",
          featured: false,
          created_at: new Date(),
          updated_at: new Date(),
          brand_id: 6666,
        },
      ]);
    });
};
