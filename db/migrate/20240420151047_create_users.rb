class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.boolean :blocked, :default => false
      t.datetime :last_sign_in, default: ""

      t.timestamps
    end
  end
end
