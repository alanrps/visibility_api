
exports.up = knex => knex.schema.createTable('markers_type', table => {
    table
        .string('id', 50)
        .primary()
        .notNull();
    table
        .string('details', 100)
        .defaultTo(null);
    table
        .dateTime('created_at')
        .notNull()
        .defaultTo(knex.raw('now()'));
    table
        .dateTime('updated_at')
        .notNull()
        .defaultTo(knex.raw('now()'));
    table
        .dateTime('deleted_at')
        .defaultTo(null);
});

exports.down = knex => knex.schema.dropTable('markers_type');
