class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.boolean :has_admin_privileges, default: false, null: true 

      t.timestamps
    end
  end
end
