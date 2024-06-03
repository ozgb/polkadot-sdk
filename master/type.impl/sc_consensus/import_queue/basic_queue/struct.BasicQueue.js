(function() {var type_impls = {
"sc_consensus_pow":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BasicQueue%3CB%3E\" class=\"impl\"><a href=\"#impl-BasicQueue%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; BasicQueue&lt;B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>&lt;V&gt;(\n    verifier: V,\n    block_import: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn BlockImport&lt;B, Error = <a class=\"enum\" href=\"sp_consensus/error/enum.Error.html\" title=\"enum sp_consensus::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;,\n    justification_import: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn JustificationImport&lt;B, Error = <a class=\"enum\" href=\"sp_consensus/error/enum.Error.html\" title=\"enum sp_consensus::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,\n    spawner: &amp;impl <a class=\"trait\" href=\"sp_core/traits/trait.SpawnEssentialNamed.html\" title=\"trait sp_core::traits::SpawnEssentialNamed\">SpawnEssentialNamed</a>,\n    prometheus_registry: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;Registry&gt;\n) -&gt; BasicQueue&lt;B&gt;<div class=\"where\">where\n    V: 'static + Verifier&lt;B&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Instantiate a new basic queue, with given verifier.</p>\n<p>This creates a background task, and calls <code>on_start</code> on the justification importer.</p>\n</div></details></div></details>",0,"sc_consensus_pow::PowImportQueue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ImportQueue%3CB%3E-for-BasicQueue%3CB%3E\" class=\"impl\"><a href=\"#impl-ImportQueue%3CB%3E-for-BasicQueue%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; ImportQueue&lt;B&gt; for BasicQueue&lt;B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.service\" class=\"method trait-impl\"><a href=\"#method.service\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">service</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn ImportQueueService&lt;B&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get handle to [<code>ImportQueueService</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.service_ref\" class=\"method trait-impl\"><a href=\"#method.service_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">service_ref</a>(&amp;mut self) -&gt; &amp;mut dyn ImportQueueService&lt;B&gt;</h4></section></summary><div class=\"docblock\"><p>Get a reference to the handle to [<code>ImportQueueService</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_actions\" class=\"method trait-impl\"><a href=\"#method.poll_actions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">poll_actions</a>(&amp;mut self, cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;, link: &amp;mut dyn Link&lt;B&gt;)</h4></section></summary><div class=\"docblock\"><p>Poll actions from network.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run\" class=\"method trait-impl\"><a href=\"#method.run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">run</a>&lt;'async_trait&gt;(\n    self,\n    link: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn Link&lt;B&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    BasicQueue&lt;B&gt;: 'async_trait,</div></h4></section></summary><div class=\"docblock\"><p>Start asynchronous runner for import queue.</p>\n<p>Takes an object implementing [<code>Link</code>] which allows the import queue to\ninfluence the synchronization process.</p>\n</div></details></div></details>","ImportQueue<B>","sc_consensus_pow::PowImportQueue"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-BasicQueue%3CB%3E\" class=\"impl\"><a href=\"#impl-Drop-for-BasicQueue%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for BasicQueue&lt;B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">Block</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","sc_consensus_pow::PowImportQueue"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()