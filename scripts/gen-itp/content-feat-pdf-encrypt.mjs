export default {
  section: 'features',
  slug: 'pdf-encrypt',
  date: '2026-09-07',
  content: {
    en: {
      title: 'Encrypt PDF',
      description: 'Guide to the Image to PDF encryption feature: set an open password and owner password, control printing, copying and editing permissions, with AES-256 encryption by default.',
      body: `## Encrypt PDF

Put a password lock on your PDF. Contracts, ID scans, financial documents — encrypt them before sending via email or chat tools, so only people with the password can open them.

## Two Passwords, Each with Its Own Role

- **User password (open password)**: once set, anyone who wants to open this PDF must enter this password — it is the first gate to the file;
- **Owner password (optional)**: set separately from the user password; whoever holds the owner password can change the file's permission settings.

## Fine-Grained Permission Control

While encrypting, you can control which actions are allowed on this PDF:

- **Allow printing** (on by default): whether the file can be printed;
- **Allow copying** (off by default): whether the text or images inside can be copied;
- **Allow editing** (off by default): whether the file content can be modified.

For example, when sending a quotation to an outside party, you can enable printing and disable copying and editing — convenient for the recipient to view, while reducing the risk of the content being lifted directly.

## AES Encryption Standard

Encryption uses **AES-256** by default, and you can switch to AES-128 for better compatibility. Encryption is performed locally on your device; the PDF content is never uploaded to any server.`,
    },
    'zh-TW': {
      title: 'PDF加密',
      description: '圖片轉PDF 加密功能使用說明：設定開啟密碼與擁有者密碼，控制列印、複製、修改權限，預設採用AES-256加密。',
      body: `## PDF加密

給PDF加一道密碼鎖。合約、證件掃描件、財務資料在透過電子郵件或通訊軟體傳送之前，先加密，確保只有拿到密碼的人才能開啟。

## 兩種密碼，各司其職

- **使用者密碼（開啟密碼）**：設定後，任何人開啟這份PDF都需要輸入該密碼，這是檔案的第一道門；
- **擁有者密碼（可選）**：與使用者密碼分開設定，持有擁有者密碼的人可以修改檔案的權限設定。

## 精細的權限控制

加密的同時可以控制這份PDF允許哪些操作：

- **允許列印**（預設開啟）：是否允許列印這份檔案；
- **允許複製**（預設關閉）：是否允許複製其中的文字或圖片；
- **允許修改**（預設關閉）：是否允許編輯檔案內容。

例如對外傳送報價單時，可以開啟列印、關閉複製與修改，既方便對方查看，又減少內容被直接挪用的風險。

## AES加密標準

加密預設採用 **AES-256**，也可以切換為 AES-128，相容性更好。加密在裝置本地完成，PDF內容不會上傳到任何伺服器。`,
    },
    ja: {
      title: 'PDF暗号化',
      description: '画像からPDFの暗号化機能の使い方：開くパスワードと所有者パスワードを設定し、印刷・コピー・編集の権限を制御。既定ではAES-256暗号化を使用します。',
      body: `## PDF暗号化

PDFにパスワードロックをかけます。契約書、証明書のスキャン、財務資料などは、メールやチャットツールで送信する前に暗号化しておけば、パスワードを知る人だけが開けます。

## 2種類のパスワード、それぞれの役割

- **ユーザーパスワード（開くパスワード）**：設定すると、このPDFを開く全員がこのパスワードの入力を求められます。ファイルへの第一の門です；
- **所有者パスワード（任意）**：ユーザーパスワードとは別に設定でき、所有者パスワードを持つ人はファイルの権限設定を変更できます。

## 細かい権限制御

暗号化と同時に、このPDFで許可する操作を制御できます：

- **印刷を許可**（既定でオン）：このファイルの印刷を許可するかどうか；
- **コピーを許可**（既定でオフ）：内部のテキストや画像のコピーを許可するかどうか；
- **編集を許可**（既定でオフ）：ファイル内容の編集を許可するかどうか。

たとえば見積書を社外に送る際は、印刷を許可し、コピーと編集を無効にすれば、先方は閲覧しやすく、内容をそのまま流用されるリスクも減らせます。

## AES暗号化規格

暗号化は既定で **AES-256** を使用しますが、互換性を重視する場合は AES-128 に切り替えられます。暗号化は端末内で完了し、PDFの内容がサーバーにアップロードされることはありません。`,
    },
    ko: {
      title: 'PDF 암호화',
      description: '이미지 PDF 변환 암호화 기능 사용 안내: 열기 암호와 소유자 암호를 설정하고 인쇄·복사·수정 권한을 제어하며, 기본적으로 AES-256 암호화를 사용합니다.',
      body: `## PDF 암호화

PDF에 잠금 장치를 씌웁니다. 계약서, 증명서 스캔본, 재무 자료는 이메일이나 메신저로 보내기 전에 먼저 암호화하여 암호를 가진 사람만 열 수 있도록 하세요.

## 두 가지 암호, 각자의 역할

- **사용자 암호(열기 암호)**: 설정하면 누구든 이 PDF를 열려면 이 암호를 입력해야 합니다. 파일의 첫 번째 관문입니다;
- **소유자 암호(선택)**: 사용자 암호와 별도로 설정하며, 소유자 암호를 가진 사람은 파일의 권한 설정을 변경할 수 있습니다.

## 세밀한 권한 제어

암호화와 동시에 이 PDF에서 허용할 작업을 제어할 수 있습니다:

- **인쇄 허용**(기본 켜짐): 이 파일의 인쇄를 허용할지 여부;
- **복사 허용**(기본 꺼짐): 파일 안의 텍스트나 이미지 복사를 허용할지 여부;
- **수정 허용**(기본 꺼짐): 파일 내용 편집을 허용할지 여부.

예를 들어 견적서를 외부로 보낼 때 인쇄는 허용하고 복사와 수정은 끄면, 상대방은 보기 편하면서도 내용이 그대로 가져다 쓰이는 위험을 줄일 수 있습니다.

## AES 암호화 표준

암호화는 기본적으로 **AES-256**을 사용하며, 호환성이 더 좋은 AES-128로 전환할 수도 있습니다. 암호화는 기기 로컬에서 완료되며, PDF 내용은 어떤 서버에도 업로드되지 않습니다.`,
    },
    vi: {
      title: 'Mã hóa PDF',
      description: 'Hướng dẫn sử dụng tính năng mã hóa PDF của Hình ảnh sang PDF: đặt mật khẩu mở và mật khẩu chủ sở hữu, kiểm soát quyền in, sao chép, chỉnh sửa, mặc định mã hóa AES-256.',
      body: `## Mã hóa PDF

Thêm một ổ khóa mật khẩu cho PDF. Hợp đồng, bản scan giấy tờ, tài liệu tài chính — hãy mã hóa trước khi gửi qua email hoặc công cụ nhắn tin, đảm bảo chỉ người có mật khẩu mới mở được.

## Hai loại mật khẩu, mỗi loại một vai trò

- **Mật khẩu người dùng (mật khẩu mở)**: sau khi đặt, bất kỳ ai muốn mở PDF này đều phải nhập mật khẩu đó, đây là cánh cửa đầu tiên của tệp;
- **Mật khẩu chủ sở hữu (tùy chọn)**: đặt riêng biệt với mật khẩu người dùng, người nắm giữ mật khẩu chủ sở hữu có thể thay đổi cấu hình quyền của tệp.

## Kiểm soát quyền chi tiết

Khi mã hóa, bạn có thể kiểm soát những thao tác nào được phép trên PDF này:

- **Cho phép in** (mặc định bật): có cho phép in tệp này hay không;
- **Cho phép sao chép** (mặc định tắt): có cho phép sao chép văn bản hay hình ảnh bên trong hay không;
- **Cho phép chỉnh sửa** (mặc định tắt): có cho phép sửa nội dung tệp hay không.

Ví dụ khi gửi báo giá cho bên ngoài, bạn có thể bật in, tắt sao chép và chỉnh sửa — vừa tiện cho đối phương xem, vừa giảm nguy cơ nội dung bị lấy dùng trực tiếp.

## Tiêu chuẩn mã hóa AES

Mã hóa mặc định dùng **AES-256**, cũng có thể chuyển sang AES-128 để tương thích tốt hơn. Quá trình mã hóa thực hiện tại chỗ trên thiết bị, nội dung PDF không được tải lên bất kỳ máy chủ nào.`,
    },
    id: {
      title: 'Enkripsi PDF',
      description: 'Panduan fitur enkripsi PDF Gambar ke PDF: atur kata sandi buka dan kata sandi pemilik, kontrol izin cetak, salin, dan edit, dengan enkripsi AES-256 secara bawaan.',
      body: `## Enkripsi PDF

Beri kunci kata sandi pada PDF Anda. Kontrak, hasil pemindaian dokumen, materi keuangan — enkripsi dahulu sebelum mengirimnya melalui email atau aplikasi obrolan, agar hanya orang yang memiliki kata sandi yang bisa membukanya.

## Dua Kata Sandi, Perannya Masing-masing

- **Kata sandi pengguna (kata sandi buka)**: setelah diatur, siapa pun yang membuka PDF ini harus memasukkan kata sandi tersebut — ini adalah gerbang pertama file;
- **Kata sandi pemilik (opsional)**: diatur terpisah dari kata sandi pengguna; pemegang kata sandi pemilik dapat mengubah konfigurasi izin file.

## Kontrol Izin yang Rinci

Saat mengenkripsi, Anda dapat mengontrol operasi apa saja yang diizinkan pada PDF ini:

- **Izinkan mencetak** (aktif secara bawaan): apakah file boleh dicetak;
- **Izinkan menyalin** (nonaktif secara bawaan): apakah teks atau gambar di dalamnya boleh disalin;
- **Izinkan mengedit** (nonaktif secara bawaan): apakah isi file boleh diubah.

Misalnya saat mengirim penawaran harga ke pihak luar, Anda bisa mengaktifkan pencetakan dan menonaktifkan penyalinan serta pengeditan — memudahkan penerima melihat sekaligus mengurangi risiko konten dipakai secara langsung.

## Standar Enkripsi AES

Enkripsi menggunakan **AES-256** secara bawaan, dan Anda dapat beralih ke AES-128 untuk kompatibilitas yang lebih baik. Enkripsi dilakukan secara lokal di perangkat Anda; isi PDF tidak diunggah ke server mana pun.`,
    },
    ar: {
      title: 'تشفير PDF',
      description: 'دليل استخدام ميزة تشفير PDF في صورة إلى PDF: عيّن كلمة مرور الفتح وكلمة مرور المالك، وتحكم في أذونات الطباعة والنسخ والتعديل، مع تشفير AES-256 افتراضيًا.',
      body: `## تشفير PDF

ضع قفلًا بكلمة مرور على ملف PDF. العقود وصور المستندات الممسوحة والملفات المالية — شفّرها قبل إرسالها عبر البريد الإلكتروني أو تطبيقات المحادثة، ليتأكد أن من يملك كلمة المرور فقط هو من يستطيع فتحها.

## كلمتا مرور، لكل منهما دورها

- **كلمة مرور المستخدم (كلمة مرور الفتح)**: بعد تعيينها، يحتاج أي شخص يفتح ملف PDF هذا إلى إدخال كلمة المرور، وهي البوابة الأولى للملف؛
- **كلمة مرور المالك (اختيارية)**: تُعين بشكل منفصل عن كلمة مرور المستخدم، ومن يملكها يمكنه تعديل إعدادات أذونات الملف.

## تحكم دقيق بالأذونات

أثناء التشفير يمكنك التحكم في العمليات المسموح بها على ملف PDF هذا:

- **السماح بالطباعة** (مفعّل افتراضيًا): هل يُسمح بطباعة هذا الملف؛
- **السماح بالنسخ** (معطّل افتراضيًا): هل يُسمح بنسخ النصوص أو الصور فيه؛
- **السماح بالتعديل** (معطّل افتراضيًا): هل يُسمح بتحرير محتوى الملف.

مثلًا عند إرسال عرض سعر لجهة خارجية، يمكنك تمكين الطباعة وتعطيل النسخ والتعديل — فيسهل على الطرف الآخر الاطلاع، وينخفض خطر استخدام المحتوى مباشرة.

## معيار التشفير AES

يستخدم التشفير **AES-256** افتراضيًا، ويمكنك التبديل إلى AES-128 لتوافق أفضل. تتم عملية التشفير محليًا على جهازك، ولا يُرفع محتوى PDF إلى أي خادم.`,
    },
    fr: {
      title: 'Chiffrer un PDF',
      description: "Guide de la fonction de chiffrement PDF d'Image en PDF : définissez un mot de passe d'ouverture et un mot de passe propriétaire, contrôlez les droits d'impression, de copie et de modification, avec AES-256 par défaut.",
      body: `## Chiffrer un PDF

Ajoutez un verrou par mot de passe à votre PDF. Contrats, pièces d'identité numérisées, documents financiers : chiffrez-les avant de les envoyer par e-mail ou par messagerie, afin que seules les personnes disposant du mot de passe puissent les ouvrir.

## Deux mots de passe, des rôles distincts

- **Mot de passe utilisateur (mot de passe d'ouverture)** : une fois défini, toute personne souhaitant ouvrir ce PDF doit saisir ce mot de passe ; c'est la première porte du fichier ;
- **Mot de passe propriétaire (facultatif)** : défini séparément du mot de passe utilisateur ; quiconque le détient peut modifier la configuration des permissions du fichier.

## Un contrôle fin des permissions

Lors du chiffrement, vous pouvez contrôler les actions autorisées sur ce PDF :

- **Autoriser l'impression** (activée par défaut) : autoriser ou non l'impression du fichier ;
- **Autoriser la copie** (désactivée par défaut) : autoriser ou non la copie du texte ou des images qu'il contient ;
- **Autoriser la modification** (désactivée par défaut) : autoriser ou non la modification du contenu du fichier.

Par exemple, pour l'envoi d'un devis à un tiers, vous pouvez activer l'impression et désactiver la copie et la modification : le destinataire consulte facilement le document, tandis que le risque de réutilisation directe du contenu est réduit.

## Norme de chiffrement AES

Le chiffrement utilise **AES-256** par défaut, avec possibilité de passer à AES-128 pour une meilleure compatibilité. Le chiffrement s'effectue localement sur votre appareil ; le contenu du PDF n'est envoyé à aucun serveur.`,
    },
    de: {
      title: 'PDF verschlüsseln',
      description: 'Anleitung zur Verschlüsselungsfunktion von Bild zu PDF: Öffnen-Passwort und Besitzer-Passwort festlegen, Druck-, Kopier- und Bearbeitungsrechte steuern, standardmäßig mit AES-256.',
      body: `## PDF verschlüsseln

Legen Sie ein Passwortschloss auf Ihre PDF-Datei. Verträge, eingescannte Ausweisdokumente, Finanzunterlagen — verschlüsseln Sie sie, bevor Sie sie per E-Mail oder Messenger senden, damit nur Personen mit dem Passwort sie öffnen können.

## Zwei Passwörter mit jeweils eigener Aufgabe

- **Benutzerpasswort (Öffnen-Passwort)**: Nach dem Festlegen muss jeder, der dieses PDF öffnen möchte, dieses Passwort eingeben — es ist das erste Tor zur Datei;
- **Besitzer-Passwort (optional)**: getrennt vom Benutzerpasswort festgelegt; wer das Besitzer-Passwort besitzt, kann die Berechtigungseinstellungen der Datei ändern.

## Fein abgestufte Berechtigungen

Beim Verschlüsseln können Sie steuern, welche Aktionen für dieses PDF erlaubt sind:

- **Drucken erlauben** (standardmäßig aktiv): ob die Datei gedruckt werden darf;
- **Kopieren erlauben** (standardmäßig deaktiviert): ob Text oder Bilder darin kopiert werden dürfen;
- **Bearbeiten erlauben** (standardmäßig deaktiviert): ob der Dateiinhalt geändert werden darf.

Wenn Sie beispielsweise ein Angebot an Dritte senden, können Sie das Drucken erlauben und Kopieren sowie Bearbeiten deaktivieren — so lässt sich das Dokument bequem einsehen, während das Risiko einer direkten Weiterverwendung des Inhalts sinkt.

## AES-Verschlüsselungsstandard

Die Verschlüsselung verwendet standardmäßig **AES-256**; Sie können auf AES-128 umschalten, das besser kompatibel ist. Die Verschlüsselung erfolgt lokal auf Ihrem Gerät; der PDF-Inhalt wird auf keinen Server hochgeladen.`,
    },
    es: {
      title: 'Cifrar PDF',
      description: 'Guía de la función de cifrado de PDF de Imagen a PDF: configure una contraseña de apertura y una contraseña de propietario, controle los permisos de impresión, copia y edición, con AES-256 de forma predeterminada.',
      body: `## Cifrar PDF

Ponga un candado con contraseña a su PDF. Contratos, documentos de identidad escaneados, material financiero: cífrelos antes de enviarlos por correo electrónico o herramientas de chat, y asegúrese de que solo quienes tengan la contraseña puedan abrirlos.

## Dos contraseñas, cada una con su función

- **Contraseña de usuario (contraseña de apertura)**: una vez configurada, cualquier persona que quiera abrir este PDF deberá introducirla; es la primera puerta del archivo;
- **Contraseña de propietario (opcional)**: se configura por separado de la contraseña de usuario; quien la posea puede modificar la configuración de permisos del archivo.

## Control detallado de permisos

Al cifrar, puede controlar qué acciones se permiten en este PDF:

- **Permitir imprimir** (activado por defecto): si se permite imprimir el archivo;
- **Permitir copiar** (desactivado por defecto): si se permite copiar el texto o las imágenes que contiene;
- **Permitir modificar** (desactivado por defecto): si se permite editar el contenido del archivo.

Por ejemplo, al enviar una cotización a terceros, puede activar la impresión y desactivar la copia y la modificación: el destinatario puede consultarla cómodamente y se reduce el riesgo de que el contenido se reutilice directamente.

## Estándar de cifrado AES

El cifrado usa **AES-256** de forma predeterminada, y puede cambiar a AES-128 para mayor compatibilidad. El cifrado se realiza localmente en su dispositivo; el contenido del PDF no se sube a ningún servidor.`,
    },
    pt: {
      title: 'Criptografar PDF',
      description: 'Guia do recurso de criptografia de PDF do Imagem para PDF: defina uma senha de abertura e uma senha de proprietário, controle permissões de impressão, cópia e edição, com AES-256 por padrão.',
      body: `## Criptografar PDF

Coloque uma senha no seu PDF. Contratos, digitalizações de documentos, materiais financeiros — criptografe antes de enviar por e-mail ou aplicativos de mensagem, garantindo que apenas quem tiver a senha possa abrir o arquivo.

## Duas senhas, cada uma com sua função

- **Senha do usuário (senha de abertura)**: depois de definida, qualquer pessoa que abrir esse PDF precisará informá-la; é a primeira porta do arquivo;
- **Senha do proprietário (opcional)**: definida separadamente da senha do usuário; quem a possui pode alterar as configurações de permissão do arquivo.

## Controle de permissões detalhado

Ao criptografar, você pode controlar quais ações são permitidas neste PDF:

- **Permitir impressão** (ativada por padrão): se o arquivo pode ser impresso;
- **Permitir cópia** (desativada por padrão): se o texto ou as imagens podem ser copiados;
- **Permitir edição** (desativada por padrão): se o conteúdo do arquivo pode ser modificado.

Por exemplo, ao enviar um orçamento para fora, você pode ativar a impressão e desativar a cópia e a edição: fica fácil para o destinatário consultar e diminui o risco de o conteúdo ser aproveitado diretamente.

## Padrão de criptografia AES

A criptografia usa **AES-256** por padrão e pode ser alternada para AES-128, com melhor compatibilidade. A criptografia é concluída localmente no seu dispositivo; o conteúdo do PDF não é enviado a nenhum servidor.`,
    },
    it: {
      title: 'Crittaggiare PDF',
      description: "Guida alla funzione di crittaggio PDF di Immagine in PDF: imposta una password di apertura e una password del proprietario, controlla i permessi di stampa, copia e modifica, con AES-256 per impostazione predefinita.",
      body: `## Crittaggiare PDF

Metti una serratura con password sul tuo PDF. Contratti, scansioni di documenti d'identità, materiali finanziari: crittaggiali prima di inviarli via e-mail o tramite app di messaggistica, così solo chi ha la password potrà aprirli.

## Due password, ciascuna con il suo ruolo

- **Password utente (password di apertura)**: una volta impostata, chiunque voglia aprire questo PDF dovrà inserirla; è il primo accesso al file;
- **Password del proprietario (facoltativa)**: impostata separatamente dalla password utente; chi la possiede può modificare le impostazioni dei permessi del file.

## Controllo dettagliato dei permessi

Durante il crittaggio puoi controllare quali azioni sono consentite su questo PDF:

- **Consenti stampa** (attiva per impostazione predefinita): se il file può essere stampato;
- **Consenti copia** (disattiva per impostazione predefinita): se se ne può copiare il testo o le immagini;
- **Consenti modifica** (disattiva per impostazione predefinita): se il contenuto del file può essere modificato.

Ad esempio, quando invii un preventivo a terzi, puoi attivare la stampa e disattivare copia e modifica: il destinatario lo consulta facilmente e si riduce il rischio che il contenuto venga riutilizzato direttamente.

## Standard di crittaggio AES

Il crittaggio usa **AES-256** per impostazione predefinita ed è possibile passare ad AES-128 per una migliore compatibilità. Il crittaggio avviene localmente sul tuo dispositivo; il contenuto del PDF non viene caricato su alcun server.`,
    },
    ru: {
      title: 'Шифрование PDF',
      description: 'Руководство по функции шифрования PDF в Изображение в PDF: задайте пароль открытия и пароль владельца, управляйте правами на печать, копирование и редактирование; по умолчанию используется AES-256.',
      body: `## Шифрование PDF

Поставьте на PDF парольный замок. Договоры, сканы документов, финансовые материалы — зашифруйте их перед отправкой по почте или в мессенджере, чтобы открыть файл могли только те, у кого есть пароль.

## Два пароля, у каждого своя роль

- **Пользовательский пароль (пароль открытия)**: после установки любой, кто захочет открыть этот PDF, должен будет ввести этот пароль — это первая дверь к файлу;
- **Пароль владельца (необязательный)**: задаётся отдельно от пользовательского пароля; тот, у кого он есть, может изменять настройки разрешений файла.

## Тонкая настройка разрешений

При шифровании можно управлять тем, какие действия разрешены для этого PDF:

- **Разрешить печать** (включено по умолчанию): можно ли печатать этот файл;
- **Разрешить копирование** (выключено по умолчанию): можно ли копировать текст или изображения из него;
- **Разрешить изменение** (выключено по умолчанию): можно ли редактировать содержимое файла.

Например, отправляя прайс-лист внешнему адресату, можно включить печать и отключить копирование и изменение — адресату удобно смотреть документ, а риск прямого заимствования содержимого снижается.

## Стандарт шифрования AES

По умолчанию используется **AES-256**, при желании можно переключиться на AES-128 с лучшей совместимостью. Шифрование выполняется локально на устройстве; содержимое PDF не отправляется ни на какой сервер.`,
    },
    th: {
      title: 'เข้ารหัส PDF',
      description: 'คู่มือใช้งานฟีเจอร์เข้ารหัส PDF ของ รูปภาพเป็น PDF: ตั้งรหัสผ่านเปิดไฟล์และรหัสผ่านเจ้าของ ควบคุมสิทธิ์การพิมพ์ คัดลอก และแก้ไข โดยใช้ AES-256 เป็นค่าเริ่มต้น',
      body: `## เข้ารหัส PDF

ใส่กุญแจรหัสผ่านให้ไฟล์ PDF สัญญา เอกสารสแกน ข้อมูลการเงิน ควรเข้ารหัสก่อนส่งผ่านอีเมลหรือแอปแชท เพื่อให้มีเพียงผู้ที่ได้รหัสผ่านเท่านั้นที่เปิดได้

## รหัสผ่านสองแบบ ทำหน้าที่ต่างกัน

- **รหัสผ่านผู้ใช้ (รหัสผ่านเปิดไฟล์)**: เมื่อตั้งแล้ว ทุกคนที่เปิด PDF นี้ต้องกรอกรหัสผ่านนี้ ถือเป็นประตูด่านแรกของไฟล์;
- **รหัสผ่านเจ้าของ (เลือกได้)**: ตั้งแยกจากรหัสผ่านผู้ใช้ ผู้ที่ถือรหัสผ่านเจ้าของสามารถแก้ไขการตั้งค่าสิทธิ์ของไฟล์ได้

## ควบคุมสิทธิ์อย่างละเอียด

ขณะเข้ารหัส คุณควบคุมได้ว่าจะอนุญาตการใช้งานใดบ้างกับ PDF นี้:

- **อนุญาตการพิมพ์** (เปิดเป็นค่าเริ่มต้น): อนุญาตให้พิมพ์ไฟล์นี้หรือไม่;
- **อนุญาตการคัดลอก** (ปิดเป็นค่าเริ่มต้น): อนุญาตให้คัดลอกข้อความหรือรูปภาพในไฟล์หรือไม่;
- **อนุญาตการแก้ไข** (ปิดเป็นค่าเริ่มต้น): อนุญาตให้แก้ไขเนื้อหาไฟล์หรือไม่

เช่น เมื่อส่งใบเสนอราคาให้ภายนอก สามารถเปิดการพิมพ์และปิดการคัดลอกกับการแก้ไข อีกฝ่ายดูสะดวก และลดความเสี่ยงที่เนื้อหาจะถูกนำไปใช้โดยตรง

## มาตรฐานการเข้ารหัส AES

การเข้ารหัสใช้ **AES-256** เป็นค่าเริ่มต้น และเปลี่ยนเป็น AES-128 เพื่อความเข้ากันได้ที่ดีขึ้นได้ การเข้ารหัสทำบนอุปกรณ์ของคุณ เนื้อหา PDF จะไม่ถูกอัปโหลดไปยังเซิร์ฟเวอร์ใด ๆ`,
    },
  },
};
