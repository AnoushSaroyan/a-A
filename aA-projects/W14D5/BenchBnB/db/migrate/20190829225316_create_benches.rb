class CreateBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :benches do |t|
      t.string :description
      t.float :lat
      t.float :lng

      t.timestamps
    end

    add_index :benches, :description
    #Ex:- add_index("admin_users", "username")
  end
end
