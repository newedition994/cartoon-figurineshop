class CreateFigurines < ActiveRecord::Migration[5.1]
  def change
    create_table :figurines do |t|
      t.string :name
      t.integer :price
      t.string :img_url
      t.integer :size

      t.timestamps
    end
  end
end
