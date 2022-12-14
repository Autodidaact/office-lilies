class CreateReplies < ActiveRecord::Migration[6.1]
  def change
    create_table :replies do |t|
      t.text :message
      t.belongs_to :review, null: false, foreign_key: true

      t.timestamps
    end
  end
end
