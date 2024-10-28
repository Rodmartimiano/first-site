/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("hero_data", (table) => {
    table.increments("id").notNullable().unique().unsigned();

    table.string("main_title");

    table.string("description");

    table.string("badge_texts");

    table.boolean("show_open_account").defaultTo(0);

    table.boolean("show_compare_cards").defaultTo(0);

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("hero_data");
};
