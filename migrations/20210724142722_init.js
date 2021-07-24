exports.up = async (knex) => {
  await knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("first_name").notNullable();
    table.string("last_name");
    table.string("image");
    table.boolean("is_admin").defaultTo(false);
    table.timestamps();
  });

  await knex.schema.createTable("brands", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("image");
    table.string("description");
    table.timestamps();
  });

  await knex.schema.createTable("categories", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("image");
    table.text("description");
    table.timestamps();
  });

  await knex.schema.createTable("products", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("small_image");
    table.string("medium_image");
    table.string("large_image");
    table.boolean("is_active").defaultTo(true);
    table.float("unit_price");
    table.float("alt_price");
    table.integer("unit_count").defaultTo(0);
    table.text("short_description");
    table.text("description");
    table.boolean("featured").defaultTo(false);
    table.timestamps();
    table
      .integer("brand_id")
      .unsigned()
      .references("id")
      .inTable("brands")
      .onDelete("cascade");
  });

  await knex.schema.createTable("orders", function (table) {
    table.increments();
    table
      .integer("customer_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("cascade");
    table.integer("order_status");
    table.timestamp("date_purchased");
    table.timestamps();
  });

  await knex.schema.createTable("products_orders", function (table) {
    table.increments();
    table
      .integer("orders_id")
      .unsigned()
      .references("id")
      .inTable("orders")
      .onDelete("cascade");
    table
      .integer("products_id")
      .unsigned()
      .references("id")
      .inTable("products")
      .onDelete("cascade");
    table.integer("products_quantity");
    table.float("final_price");
  });

  await knex.schema.createTable("products_categories", function (table) {
    table
      .integer("products_id")
      .unsigned()
      .references("id")
      .inTable("products")
      .onDelete("cascade");
    table
      .integer("categories_id")
      .unsigned()
      .references("id")
      .inTable("categories")
      .onDelete("cascade");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("products_categories");
  await knex.schema.dropTable("products_orders");
  await knex.schema.dropTable("orders");
  await knex.schema.dropTable("products");
  await knex.schema.dropTable("categories");
  await knex.schema.dropTable("brands");
  await knex.schema.dropTable("users");
};
