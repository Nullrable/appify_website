export default {
  section: 'features',
  slug: 'pdf-decrypt',
  date: '2026-09-07',
  content: {
    en: {
      title: 'Decrypt PDF',
      description: 'Guide to the Image to PDF decryption feature: enter a password to remove PDF encryption, with automatic detection of whether a file is encrypted, making later editing and merging easy.',
      body: `## Decrypt PDF

Remove encryption protection from a PDF when you know the password. Encrypted PDFs cannot be edited, merged, or converted to images directly — decrypt first, and everything after goes smoothly.

## Encryption Detection

After you select a file, the app automatically detects whether the PDF is encrypted, so you do not have to rely on memory to judge the file's status.

## Enter the Password to Remove Encryption

Enter the correct password, and the app removes the encryption protection from the PDF locally, producing a new file that no longer requires a password. The output file can be opened, edited, merged, or converted to images as usual.

## Common Scenarios

- Material encrypted earlier that no longer needs to stay confidential — decrypt it for easy viewing anytime;
- You want to merge several encrypted PDFs into one — decrypt each of them first, then merge;
- An encrypted PDF needs to be converted to images — decrypt it, then use the PDF-to-images feature.

The entire decryption process is completed locally on your device; neither the file nor the password is ever uploaded to any server.`,
    },
    'zh-TW': {
      title: 'PDF解密',
      description: '圖片轉PDF 解密功能使用說明：輸入密碼移除PDF加密，支援偵測檔案是否已加密，方便後續編輯與合併。',
      body: `## PDF解密

知道密碼的前提下，移除PDF上的加密保護。加密的PDF無法直接編輯、合併或轉成圖片，先解密，後續處理就順暢了。

## 加密偵測

選擇檔案後，應用程式會自動偵測這份PDF是否已加密，你不需要憑記憶判斷檔案狀態。

## 輸入密碼，移除加密

輸入正確的密碼，應用程式即可在本地移除這份PDF的加密保護，產生一份不再需要密碼的新檔案。輸出檔案可以正常開啟、編輯、合併或轉換為圖片。

## 常見情境

- 之前加密的資料，現在不再需要保密，解密後方便自己隨時查看；
- 想把多份加密的PDF合併成一份，先逐一解密再合併；
- 加密PDF需要轉成圖片，解密後即可使用PDF轉圖片功能。

整個解密過程在裝置本地完成，檔案與密碼都不會上傳到任何伺服器。`,
    },
    ja: {
      title: 'PDF暗号解除',
      description: '画像からPDFの暗号解除機能の使い方：パスワードを入力してPDFの暗号を解除。ファイルが暗号化されているかどうかの検出にも対応し、その後の編集や結合がスムーズになります。',
      body: `## PDF暗号解除

パスワードを知っている前提で、PDFの暗号保護を解除します。暗号化されたPDFはそのままでは編集・結合・画像への変換ができないため、先に解除しておけばその後の処理がスムーズです。

## 暗号化の検出

ファイルを選択すると、アプリがこのPDFが暗号化されているかどうかを自動で検出します。ファイルの状態を記憶から判断する必要はありません。

## パスワードを入力して暗号を解除

正しいパスワードを入力すると、アプリは端末内でこのPDFの暗号保護を解除し、パスワード不要の新しいファイルを生成します。出力されたファイルは、通常どおり開く・編集・結合・画像への変換が可能です。

## よくあるシーン

- 以前暗号化した資料が、もう機密保持の必要がなくなった。解除すればいつでも自分で閲覧しやすくなります；
- 暗号化された複数のPDFを1つに結合したい。1つずつ解除してから結合しましょう；
- 暗号化PDFを画像に変換したい。解除すればPDFから画像への変換機能を利用できます。

暗号解除の全過程は端末内で完結し、ファイルもパスワードも一切サーバーにアップロードされません。`,
    },
    ko: {
      title: 'PDF 암호 해제',
      description: '이미지 PDF 변환 암호 해제 기능 사용 안내: 암호를 입력해 PDF 암호화를 해제하고, 파일이 암호화되어 있는지 자동 감지하여 이후 편집과 병합을 편리하게 합니다.',
      body: `## PDF 암호 해제

암호를 알고 있는 경우 PDF의 암호화 보호를 해제합니다. 암호화된 PDF는 바로 편집, 병합, 이미지 변환할 수 없으므로 먼저 해제하면 이후 작업이 순조롭습니다.

## 암호화 감지

파일을 선택하면 앱이 이 PDF가 암호화되었는지 자동으로 감지해 주므로, 기억에 의존해 파일 상태를 판단할 필요가 없습니다.

## 암호 입력 후 암호화 해제

올바른 암호를 입력하면 앱이 기기 로컬에서 이 PDF의 암호화 보호를 해제하고, 더 이상 암호가 필요 없는 새 파일을 생성합니다. 출력된 파일은 정상적으로 열기, 편집, 병합, 이미지 변환이 모두 가능합니다.

## 자주 있는 상황

- 예전에 암호화한 자료를 더 이상 비밀로 유지할 필요가 없을 때, 해제하면 언제든 편하게 확인할 수 있습니다;
- 암호화된 PDF 여러 개를 하나로 병합하려면 먼저 하나씩 해제한 뒤 병합하세요;
- 암호화된 PDF를 이미지로 변환해야 할 때, 해제 후 PDF를 이미지로 변환하는 기능을 사용하면 됩니다.

해제 과정 전체는 기기 로컬에서 완료되며, 파일과 암호는 어떤 서버에도 업로드되지 않습니다.`,
    },
    vi: {
      title: 'Giải mã PDF',
      description: 'Hướng dẫn sử dụng tính năng giải mã PDF của Hình ảnh sang PDF: nhập mật khẩu để gỡ mã hóa PDF, hỗ trợ phát hiện tệp đã mã hóa, thuận tiện cho việc chỉnh sửa và gộp sau này.',
      body: `## Giải mã PDF

Với điều kiện đã biết mật khẩu, gỡ bỏ lớp bảo vệ mã hóa trên PDF. PDF đã mã hóa không thể chỉnh sửa, gộp hay chuyển sang ảnh trực tiếp — giải mã trước, mọi xử lý sau đó sẽ thông suốt.

## Phát hiện mã hóa

Sau khi chọn tệp, ứng dụng tự động phát hiện PDF này đã được mã hóa hay chưa, bạn không cần dựa vào trí nhớ để phán đoán trạng thái tệp.

## Nhập mật khẩu, gỡ mã hóa

Nhập đúng mật khẩu, ứng dụng sẽ gỡ bỏ bảo vệ mã hóa của PDF này ngay trên máy và tạo tệp mới không còn yêu cầu mật khẩu. Tệp xuất ra có thể mở, chỉnh sửa, gộp hoặc chuyển đổi thành ảnh như bình thường.

## Tình huống thường gặp

- Tài liệu đã mã hóa trước đây giờ không còn cần bảo mật, giải mã để tiện xem xét bất cứ lúc nào;
- Muốn gộp nhiều PDF đã mã hóa thành một, hãy giải mã từng tệp trước rồi mới gộp;
- PDF đã mã hóa cần chuyển thành ảnh, sau khi giải mã có thể dùng tính năng PDF chuyển ảnh.

Toàn bộ quá trình giải mã thực hiện tại chỗ trên thiết bị, tệp và mật khẩu đều không được tải lên bất kỳ máy chủ nào.`,
    },
    id: {
      title: 'Dekripsi PDF',
      description: 'Panduan fitur dekripsi PDF Gambar ke PDF: masukkan kata sandi untuk menghapus enkripsi PDF, lengkap dengan deteksi file terenkripsi, memudahkan pengeditan dan penggabungan selanjutnya.',
      body: `## Dekripsi PDF

Hapus proteksi enkripsi pada PDF asalkan Anda tahu kata sandinya. PDF terenkripsi tidak bisa langsung diedit, digabung, atau dikonversi menjadi gambar — dekripsi dulu, dan proses selanjutnya akan lancar.

## Deteksi Enkripsi

Setelah file dipilih, aplikasi otomatis mendeteksi apakah PDF tersebut sudah terenkripsi, sehingga Anda tidak perlu mengandalkan ingatan untuk menilai status file.

## Masukkan Kata Sandi, Hapus Enkripsi

Masukkan kata sandi yang benar, dan aplikasi akan menghapus proteksi enkripsi PDF tersebut secara lokal di perangkat, menghasilkan file baru yang tidak lagi memerlukan kata sandi. File hasil keluaran dapat dibuka, diedit, digabung, atau dikonversi menjadi gambar seperti biasa.

## Skenario Umum

- Materi yang dulunya dienkripsi dan kini tidak perlu lagi dirahasiakan — dekripsi agar mudah dilihat kapan saja;
- Ingin menggabungkan beberapa PDF terenkripsi menjadi satu — dekripsi satu per satu lebih dahulu, lalu gabungkan;
- PDF terenkripsi perlu dikonversi menjadi gambar — setelah dekripsi, gunakan fitur PDF ke gambar.

Seluruh proses dekripsi selesai secara lokal di perangkat; file maupun kata sandi tidak diunggah ke server mana pun.`,
    },
    ar: {
      title: 'فك تشفير PDF',
      description: 'دليل استخدام ميزة فك تشفير PDF في صورة إلى PDF: أدخل كلمة المرور لإزالة تشفير PDF، مع كشف تلقائي لما إذا كان الملف مشفرًا، لتسهيل التحرير والدمج لاحقًا.',
      body: `## فك تشفير PDF

أزل الحماية بالتشفير عن ملف PDF عندما تعرف كلمة المرور. ملفات PDF المشفرة لا يمكن تحريرها أو دمجها أو تحويلها إلى صور مباشرة — فك التشفير أولًا، ويسير ما بعده بسلاسة.

## كشف التشفير

بعد اختيار الملف، يكتشف التطبيق تلقائيًا ما إذا كان ملف PDF هذا مشفرًا، فلا تحتاج إلى الحكم على حالة الملف من الذاكرة.

## أدخل كلمة المرور لإزالة التشفير

أدخل كلمة المرور الصحيحة، وسيزيل التطبيق حماية التشفير عن ملف PDF هذا محليًا على الجهاز، منتجًا ملفًا جديدًا لم يعد يتطلب كلمة مرور. يمكن فتح ملف المخرجات وتحريره ودمجه أو تحويله إلى صور بشكل طبيعي.

## سيناريوهات شائعة

- مادة شُفرت سابقًا ولم تعد بحاجة إلى السرية — فك تشفيرها لتسهيل الاطلاع عليها في أي وقت؛
- تريد دمج عدة ملفات PDF مشفرة في ملف واحد — فك تشفيرها واحدًا واحدًا ثم ادمجها؛
- ملف PDF مشفر يحتاج إلى التحويل إلى صور — بعد فك التشفير استخدم ميزة تحويل PDF إلى صور.

تتم عملية فك التشفير بأكملها محليًا على الجهاز، ولا يُرفع الملف ولا كلمة المرور إلى أي خادم.`,
    },
    fr: {
      title: 'Déchiffrer un PDF',
      description: "Guide de la fonction de déchiffrement PDF d'Image en PDF : saisissez le mot de passe pour supprimer le chiffrement d'un PDF, avec détection automatique du chiffrement, pour faciliter l'édition et la fusion.",
      body: `## Déchiffrer un PDF

Supprimez la protection par chiffrement d'un PDF lorsque vous connaissez le mot de passe. Un PDF chiffré ne peut pas être modifié, fusionné ou converti en images directement — déchiffrez-le d'abord, et la suite se fait en douceur.

## Détection du chiffrement

Dès que vous sélectionnez un fichier, l'application détecte automatiquement si ce PDF est chiffré : nul besoin de juger l'état du fichier de mémoire.

## Saisir le mot de passe, supprimer le chiffrement

Saisissez le mot de passe correct et l'application supprime localement la protection par chiffrement de ce PDF, générant un nouveau fichier qui n'exige plus de mot de passe. Le fichier produit peut être ouvert, modifié, fusionné ou converti en images normalement.

## Scénarios courants

- Un document chiffré autrefois, qui n'a plus besoin de rester confidentiel — déchiffrez-le pour le consulter facilement à tout moment ;
- Vous souhaitez fusionner plusieurs PDF chiffrés en un seul — déchiffrez-les un par un, puis fusionnez ;
- Un PDF chiffré doit être converti en images — déchiffrez-le, puis utilisez la fonction PDF en images.

Tout le processus de déchiffrement s'effectue localement sur votre appareil ; ni le fichier ni le mot de passe ne sont envoyés à un serveur.`,
    },
    de: {
      title: 'PDF entschlüsseln',
      description: 'Anleitung zur Entschlüsselungsfunktion von Bild zu PDF: Passwort eingeben, um die PDF-Verschlüsselung zu entfernen, mit automatischer Erkennung verschlüsselter Dateien für einfache spätere Bearbeitung und Zusammenführung.',
      body: `## PDF entschlüsseln

Entfernen Sie den Verschlüsselungsschutz eines PDF, wenn Sie das Passwort kennen. Verschlüsselte PDFs lassen sich nicht direkt bearbeiten, zusammenführen oder in Bilder umwandeln — erst entschlüsseln, dann läuft alles weitere reibungslos.

## Verschlüsselungserkennung

Nach der Dateiauswahl erkennt die App automatisch, ob dieses PDF verschlüsselt ist — Sie müssen den Dateistatus nicht aus dem Gedächtnis beurteilen.

## Passwort eingeben, Verschlüsselung entfernen

Geben Sie das richtige Passwort ein, und die App entfernt den Verschlüsselungsschutz dieses PDFs lokal auf dem Gerät und erzeugt eine neue Datei, die kein Passwort mehr benötigt. Die Ausgabedatei lässt sich wie gewohnt öffnen, bearbeiten, zusammenführen oder in Bilder umwandeln.

## Typische Szenarien

- Früher verschlüsselte Unterlagen, die nicht mehr vertraulich sein müssen — entschlüsseln und jederzeit bequem ansehen;
- Mehrere verschlüsselte PDFs zu einer Datei zusammenführen — zuerst einzeln entschlüsseln, dann zusammenführen;
- Ein verschlüsseltes PDF soll in Bilder umgewandelt werden — nach dem Entschlüsseln die Funktion PDF zu Bilder nutzen.

Der gesamte Entschlüsselungsvorgang erfolgt lokal auf Ihrem Gerät; weder die Datei noch das Passwort werden auf einen Server hochgeladen.`,
    },
    es: {
      title: 'Descifrar PDF',
      description: 'Guía de la función de descifrado de PDF de Imagen a PDF: introduzca la contraseña para eliminar el cifrado del PDF, con detección automática de si un archivo está cifrado, para facilitar la edición y combinación posteriores.',
      body: `## Descifrar PDF

Elimine la protección de cifrado de un PDF cuando conoce la contraseña. Los PDF cifrados no se pueden editar, combinar ni convertir a imágenes directamente: descífrelos primero y el procesamiento posterior será fluido.

## Detección de cifrado

Al seleccionar un archivo, la app detecta automáticamente si ese PDF está cifrado, sin que usted tenga que confiar en su memoria para saber el estado del archivo.

## Introduzca la contraseña y elimine el cifrado

Introduzca la contraseña correcta y la app eliminará localmente la protección de cifrado de este PDF, generando un archivo nuevo que ya no requiere contraseña. El archivo resultante se puede abrir, editar, combinar o convertir a imágenes con normalidad.

## Escenarios comunes

- Documentación cifrada anteriormente que ya no necesita confidencialidad: descífrelo para consultarla fácilmente en cualquier momento;
- Quiere combinar varios PDF cifrados en uno: descífrelos uno por uno y luego combínelos;
- Un PDF cifrado debe convertirse en imágenes: tras descifrarlo, utilice la función de PDF a imágenes.

Todo el proceso de descifrado se realiza localmente en su dispositivo; ni el archivo ni la contraseña se suben a ningún servidor.`,
    },
    pt: {
      title: 'Descriptografar PDF',
      description: 'Guia do recurso de descriptografia de PDF do Imagem para PDF: digite a senha para remover a criptografia do PDF, com detecção automática de arquivos criptografados, facilitando edição e mesclagem posteriores.',
      body: `## Descriptografar PDF

Remova a proteção por criptografia de um PDF quando você conhece a senha. PDFs criptografados não podem ser editados, mesclados nem convertidos em imagens diretamente — descriptografe primeiro e o processamento seguinte flui bem.

## Detecção de criptografia

Ao selecionar um arquivo, o app detecta automaticamente se esse PDF está criptografado; você não precisa confiar na memória para julgar o estado do arquivo.

## Digite a senha e remova a criptografia

Digite a senha correta e o app removerá localmente a proteção de criptografia desse PDF, gerando um novo arquivo que não exige mais senha. O arquivo de saída pode ser aberto, editado, mesclado ou convertido em imagens normalmente.

## Cenários comuns

- Documento criptografado anteriormente que não precisa mais de sigilo — descriptografe para consultá-lo com facilidade a qualquer momento;
- Quer mesclar vários PDFs criptografados em um só — descriptografe um por um antes de mesclar;
- Um PDF criptografado precisa ser convertido em imagens — após descriptografar, use o recurso de PDF para imagens.

Todo o processo de descriptografia é concluído localmente no seu dispositivo; nem o arquivo nem a senha são enviados a qualquer servidor.`,
    },
    it: {
      title: 'Decrittaggiare PDF',
      description: "Guida alla funzione di decrittaggio PDF di Immagine in PDF: inserisci la password per rimuovere la crittografia dal PDF, con rilevamento automatico dei file crittografati, per facilitare editing e unione successivi.",
      body: `## Decrittaggiare PDF

Rimuovi la protezione di crittografia da un PDF quando conosci la password. I PDF crittografati non si possono modificare, unire né convertire in immagini direttamente: prima decrittaggiali, e le elaborazioni successive saranno semplici.

## Rilevamento della crittografia

Dopo aver selezionato un file, l'app rileva automaticamente se quel PDF è crittografato: non devi affidarti alla memoria per capire lo stato del file.

## Inserisci la password e rimuovi la crittografia

Inserendo la password corretta, l'app rimuove localmente la protezione di crittografia di questo PDF e genera un nuovo file che non richiede più password. Il file in uscita si può aprire, modificare, unire o convertire in immagini come di consueto.

## Scenari comuni

- Documenti crittografati in passato che non servono più come riservati: decrittaggiali per consultarli facilmente in ogni momento;
- Vuoi unire più PDF crittografati in uno solo: decrittaggiali uno per uno e poi uniscili;
- Un PDF crittografato va convertito in immagini: dopo il decrittaggio usa la funzione da PDF a immagini.

L'intero processo di decrittaggio avviene localmente sul tuo dispositivo; né il file né la password vengono caricati su alcun server.`,
    },
    ru: {
      title: 'Расшифровка PDF',
      description: 'Руководство по функции расшифровки PDF в Изображение в PDF: введите пароль, чтобы снять шифрование с PDF; поддерживается определение, зашифрован ли файл, что упрощает дальнейшее редактирование и объединение.',
      body: `## Расшифровка PDF

Снимите защиту шифрования с PDF, если знаете пароль. Зашифрованные PDF нельзя напрямую редактировать, объединять или конвертировать в изображения — сначала расшифруйте файл, и дальнейшая обработка пойдёт гладко.

## Определение шифрования

После выбора файла приложение автоматически определяет, зашифрован ли этот PDF, — вам не нужно судить о состоянии файла по памяти.

## Введите пароль и снимите шифрование

Введите правильный пароль, и приложение локально на устройстве снимет защиту шифрования с этого PDF, создав новый файл, которому больше не требуется пароль. Полученный файл можно нормально открывать, редактировать, объединять или конвертировать в изображения.

## Типичные сценарии

- Ранее зашифрованные материалы, которые больше не нужно держать в секрете, — расшифруйте их, чтобы в любой момент удобно просматривать;
- Нужно объединить несколько зашифрованных PDF в один — сначала расшифруйте их по очереди, затем объединяйте;
- Зашифрованный PDF нужно конвертировать в изображения — после расшифровки используйте функцию «PDF в изображения».

Весь процесс расшифровки выполняется локально на устройстве; ни файл, ни пароль не отправляются ни на какой сервер.`,
    },
    th: {
      title: 'ถอดรหัส PDF',
      description: 'คู่มือใช้งานฟีเจอร์ถอดรหัส PDF ของ รูปภาพเป็น PDF: กรอกรหัสผ่านเพื่อถอดการเข้ารหัส PDF พร้อมตรวจจับว่าไฟล์ถูกเข้ารหัสหรือไม่ ช่วยให้แก้ไขและรวมไฟล์ภายหลังได้สะดวก',
      body: `## ถอดรหัส PDF

ถอดการป้องกันด้วยการเข้ารหัสออกจาก PDF เมื่อคุณทราบรหัสผ่าน PDF ที่เข้ารหัสแล้วไม่สามารถแก้ไข รวมไฟล์ หรือแปลงเป็นรูปภาพได้โดยตรง ถอดรหัสก่อน แล้วขั้นตอนถัดไปก็ราบรื่น

## ตรวจจับการเข้ารหัส

เมื่อเลือกไฟล์แล้ว แอปจะตรวจจับโดยอัตโนมัติว่า PDF นี้ถูกเข้ารหัสหรือไม่ คุณจึงไม่ต้องอาศัยความจำเพื่อตัดสินสถานะของไฟล์

## กรอกรหัสผ่าน ถอดการเข้ารหัส

กรอกรหัสผ่านที่ถูกต้อง แอปจะถอดการป้องกันการเข้ารหัสของ PDF นี้บนเครื่อง และสร้างไฟล์ใหม่ที่ไม่ต้องใช้รหัสผ่านอีก ไฟล์ผลลัพธ์เปิด แก้ไข รวมไฟล์ หรือแปลงเป็นรูปภาพได้ตามปกติ

## สถานการณ์ที่พบบ่อย

- ข้อมูลที่เคยเข้ารหัสไว้และไม่จำเป็นต้องเป็นความลับอีกแล้ว ถอดรหัสเพื่อให้เปิดดูได้สะดวกทุกเมื่อ;
- ต้องการรวม PDF ที่เข้ารหัสหลายไฟล์เป็นไฟล์เดียว ให้ถอดรหัสทีละไฟล์ก่อนแล้วจึงรวม;
- PDF ที่เข้ารหัสต้องแปลงเป็นรูปภาพ หลังถอดรหัสก็ใช้ฟีเจอร์แปลง PDF เป็นรูปภาพได้เลย

กระบวนการถอดรหัสทั้งหมดทำบนอุปกรณ์ของคุณ ทั้งไฟล์และรหัสผ่านจะไม่ถูกอัปโหลดไปยังเซิร์ฟเวอร์ใด ๆ`,
    },
  },
};
