class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.integer :price
      t.integer :number_in_stock
      t.string :image

      t.timestamps
    end
  end
end
