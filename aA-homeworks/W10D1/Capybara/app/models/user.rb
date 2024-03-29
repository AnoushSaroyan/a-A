class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true 
    validates :password, length: { minimum: 6 }

    attr_reader :password

    after_initialize :ensure_session_token
    
    def self.find_by_credentials(email, password)
        user = User.fing_by(email: email)

        return user if user && user.is_password?(password)
        nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt_pass = BCrypt::Password.new(self.password_digest)
        bcrypt_pass.is_password?(password)
    end

    def reset_session_token!
        self.update!(session_token: SecureRandom.urlsafe_base64(16))
        self.session_token
    end 

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end   
end